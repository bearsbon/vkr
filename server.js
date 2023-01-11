const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authController = require('./authController');

const controller = authController;

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
app.use(cookieParser());

app.post('/auth/register', controller.register);
app.post('/auth/login', controller.login);
app.get('/auth/users', controller.getUsers);
