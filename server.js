const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./src/controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware');
const userController = require('./src/controllers/userController');
const multer = require('multer');

const controller = authController;
const PORT = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

mongoose.set('strictQuery', true);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@cluster0.jbxvkqf.mongodb.net/?retryWrites=true&w=majority`,
    );
    app.listen(process.env.PORT || PORT, () => console.log(`listening port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};
start();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post(
  //валидируем регистрацию
  '/auth/register',
  [
    check('email', 'Поле почты не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть длиннее 3 символов').isLength({ min: 3 }),
  ],
  controller.register,
);

// Роуты авторизации
app.post('/auth/login', controller.login);
app.get('/auth/users', authMiddleware, controller.getUsers);
app.get('/auth/me', authMiddleware, controller.me);

// Обновление информации в своем резюме
app.put('/resume/:id', userController.updateUser);
app.get('/resume/:id', userController.find);
app.delete('/resume/:id', userController.deleteUser);

// Роут для multer
app.post('/upload', upload.single('avat'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

// Получение коллекции опыта
// app.get('/resume/getAllExp', userController.getAllExp);
// app.put('/resume/edit', userController.editField);
