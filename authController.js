const User = require('./src/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class authController {
  async register(req, res) {
    try {
      const email = await req.body.email;
      const password = await req.body.password;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: 'Пользователь с таким именем уже существует' });
      }
      const salt = await bcrypt.genSaltSync(7);
      const newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      });
      await newUser.save();
      return res.json({ message: 'Пользователь успешно зарегестрирован' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
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
      res.status(400).json({ message: 'Login error' });
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
}

module.exports = new authController();
