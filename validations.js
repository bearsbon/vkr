const { check } = require('express-validator');

const infoValidation = [
  check('email', 'Поле почты не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть длиннее 3 символов').isLength({ min: 3 }),
  check('age', 'Проверьте правильность введенного возраста').isLength({ min: 2 }),
  check('fullName', 'Введите полное ФИО').isString(),
];

module.exports = {
  infoValidation,
};
