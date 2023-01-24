const User = require('./src/models/User');

exports.updateUser = async (req, res) => {
  const { email } = req.body;
  const id = req.params.id;

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Поле не может быть пустым' });
  }
  User.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: `Пользователь с id ${id} не найден` });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      return res.status(500).json({ message: 'Ошибка при обновлении информации' });
    });
};

exports.find = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: `Пользователь с id ${req.params.id} не найден` });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();
    res.json({ message: 'Пользователь удален!' });
  } catch (error) {
    res.status(404).json({ message: `Пользователь с id ${req.params.id} не найден` });
  }
};

// exports.editField = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const field = req.query.field;
//     const value = req.query.value;

//     const user = await User.updateOne({ _id: id, [field]: value });

//     if (user) {
//       res.json({ message: 'Обновлено успешно!' });
//     }
//   } catch (error) {
//     res.status(404).json({ message: `Поле не найдено` });
//   }
// };
