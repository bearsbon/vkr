const { Schema, model } = require('mongoose');

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Поле почты не заполнено'],
  },
  password: {
    type: String,
    required: [true, 'Поле пароль не заполнено'],
  },
});

module.exports = model('User', User);
