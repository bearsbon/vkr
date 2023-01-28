import React, { useState } from 'react';
import useDebounce from '../hooks/debounce';

import Dropdown from '../components/Dropdown';
import EmployeeInList from '../components/EmployeeInList';

export default function Employees() {
  const jobs = ['Бухгалтер', 'Слесарь', 'Оператор ООУ', 'Экономист'];
  const [value, setValue] = useState('');

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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2010-2012', workPosition: 'Старший менеджер', location: 'Газпром' },
      ],
      studyExperience: [
        {
          id: 1,
          studyYears: '1995-1999',
          university: 'Уральский Федеральный университет',
          specialisation: 'Бакалавриат по специальности маркетинг',
        },
      ],
      skills: ['Лидерские качества', 'MS Excel', 'MS Word'],
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
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
        { id: 1, workYears: '2004-2007', workPosition: 'Бухгалтер', location: 'Лукойл' },
        { id: 2, workYears: '2007-2010', workPosition: 'Младший менеджер', location: 'Газпром' },
        { id: 3, workYears: '2007-2010', workPosition: 'Старший менеджер', location: 'Газпром' },
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
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Alex_Ovechkin_2017-05-06.jpg',
      more: '',
    },
  ];

  // фильтр поиска по ФИО
  const search = employees.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <h1 className="page_h1">Сотрудники</h1>
      <div className="content">
        <div className="filter_column w-64">
          <h3 className="border-[#B9BCC1] lg:w-[75%] xl:w-[100%] border-b-2 pb-7 font-semibold">
            Найдено: ({})
          </h3>
          <div className="filter_name">Компетенции</div>
          <input className="filter_search h-[35px] w-full border-[1px] rounded-lg" type="text" />
          <div className="filter_name">Образование</div>

          <div className="filter_name">Должность</div>
          <Dropdown data={jobs} />

          <div className="filter_name">Стаж</div>
          <input
            className="filter_search h-[35px] w-[75px] border-[1px] rounded-lg"
            type="number"
          />
        </div>
        <div className="employees_column">
          <div>
            <input
              className="employee_search"
              type="text"
              placeholder="Найти по фамилии"
              onChange={useDebounce(handleChange, 300)}
            />
          </div>
          <div className="employee_list_title">
            <div></div>
            <p>Фио</p>
            <p>Должность</p>
            <p>Компетенции</p>
          </div>
          <EmployeeInList search={search} />
        </div>
      </div>
    </div>
  );
}
