import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';

let employees = [
  {
    id: 1,
    name: 'Киркоров Филлип Бедросович',
    age: 44,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'kirkorov@gmail.com',
    position: 'Бухгалтер',
    experience: 7,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar: 'https://www.kino-teatr.ru/acter/photo/8/9/6398/1186314.jpg',
    more: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi quiaofficia impedit pariatur quae voluptatem vero eveniet eos quasi! Inventore itaquevero, possimus impedit officia ipsa nihil eveniet debitis! Maxime corrupti fugit, ipsum illo saepe architecto rem id, sed dolores nisi voluptas, aliasreprehenderit!',
  },
  {
    id: 2,
    name: 'Лепс Григорий Викторович',
    age: 56,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'leps@gmail.com',
    position: 'Экономист',
    experience: 5,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2010-2012',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'MS Excel'],
    avatar:
      'https://cdnn1.img.armeniasputnik.am/img/1347/85/13478534_497:0:2545:2048_1920x0_80_0_0_31f9fdd10484abc5998dd3c36a19b493.jpg',
    more: '',
  },
  {
    id: 3,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 4,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 5,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 6,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 7,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 8,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 9,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
  {
    id: 10,
    name: 'Овечкин Александр Михайлович',
    age: 41,
    gender: 'Мужской',
    phone: '898211133344',
    email: 'ovi@gmail.com',
    position: 'Слесарь',
    experience: 3,
    workExp: [
      {
        id: 1,
        workYears: '2004-2007',
        workPosition: 'Бухгалтер',
        location: 'Лукойл',
      },
      {
        id: 2,
        workYears: '2007-2010',
        workPosition: 'Младший менеджер',
        location: 'Газпром',
      },
      {
        id: 3,
        workYears: '2007-2010',
        workPosition: 'Старший менеджер',
        location: 'Газпром',
      },
    ],
    studyExperience: [
      {
        id: 1,
        studyYears: '1995-1999',
        university: 'Уральский Федеральный университет',
        specialisation: 'Бакалавриат по специальности маркетинг',
      },
    ],
    skills: ['Лидерские качества', 'Знание Excel'],
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
    more: '',
  },
];

export default employees;
