const { Schema, model, default: mongoose } = require('mongoose');

const SchemaWorkExp = new Schema({
  workYears: {
    type: String,
  },
  workPosition: {
    type: String,
  },
  location: {
    type: String,
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
});

const SchemaStudyExperience = new Schema({
  studyYears: {
    type: String,
  },
  university: {
    type: String,
  },
  specialisation: {
    type: String,
  },
});

const User = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
  position: {
    type: [String],
    enum: ['Бухгалтер', 'Экономист', 'Оператор ООУ', 'Слесарь'],
  },
  experience: {
    type: Number,
  },
  workExp: {
    type: [SchemaWorkExp],
    ref: 'SchemaWorkExp',
  },
  studyExperience: {
    type: [SchemaStudyExperience],
    ref: 'SchemaStudyExperience',
  },
  skills: {
    type: String,
    enum: ['Лидерские качества', 'MS Excel', 'MS Word'],
  },
  more: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
});

module.exports = model('User', User);
// {
//   id: 1,
//   name: 'Киркоров Филлип Бедросович',
//   age: 44,
//   gender: 'Мужской',
//   phone: '898211133344',
//   email: 'kirkorov@gmail.com',
//   position: 'Бухгалтер',
//   experience: 7,
//   workExp: [
//     { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
//     { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
//     { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
//   ],
//   studyExperience: [
//     {
//       id: 1,
//       studyYears: '1995-1999',
//       university: 'Уральский Федеральный университет',
//       specialisation: 'Бакалавриат по специальности маркетинг',
//     },
//   ],
//   skills: ['Лидерские качества', 'Знание Excel'],
//   avatar: 'https://www.kino-teatr.ru/acter/photo/8/9/6398/1186314.jpg',
//   more: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi quiaofficia impedit pariatur quae voluptatem vero eveniet eos quasi! Inventore itaquevero, possimus impedit officia ipsa nihil eveniet debitis! Maxime corrupti fugit, ipsum illo saepe architecto rem id, sed dolores nisi voluptas, aliasreprehenderit!',
// },
