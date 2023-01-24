const User = require('./src/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const { validationResult } = require('express-validator');
const { getMouseEventOptions } = require('@testing-library/user-event/dist/utils');

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class authController {
  async register(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Ошибка при регистрации', errors });
      }
      const email = await req.body.email;
      const password = await req.body.password;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Пользователь с таким именем уже существует' });
      }
      const salt = await bcrypt.genSaltSync(7);
      const passwordHash = bcrypt.hashSync(password, salt);
      const newUser = new User({
        email: req.body.email,
        password: passwordHash,
      });
      await newUser.save();
      return res.json({ message: 'Пользователь успешно зарегестрирован' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Не удалось зарегистрироваться' });
    }
  }

  async login(req, res) {
    try {
      const email = await req.body.email;
      const password = await req.body.password;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: `Пользователь ${email} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }
      const token = generateAccessToken(user._id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Не удалось авторизоваться' });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async me(req, res) {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(403).json({
          message: 'Пользователь не авторизован 123',
        });
      }
      res.status(200).json({ user });
    } catch (e) {
      console.log(e);
      res.status(403).json({ message: 'Нет доступа3' });
    }
  }
}

module.exports = new authController();
