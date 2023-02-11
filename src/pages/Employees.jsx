import React, { useState } from 'react';
import useDebounce from '../hooks/debounce';

import employees from './tempemp';

import Dropdown from '../components/Dropdown';
import EmployeeInList from '../components/EmployeeInList';

export default function Employees() {
  const jobs = ['Бухгалтер', 'Слесарь', 'Оператор ООУ', 'Экономист'];
  const [value, setValue] = useState('');

  const comps = ['Лидерские качества', 'MS Excel', 'Маркетинг', 'MS Word'];

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

          <div className="filter_name">Должность</div>
          <Dropdown data={jobs} />
          <hr className="solid" />

          <div className="filter_name">Стаж работы</div>
          <input
            className="filter_search h-[35px] w-[75px] border-[1px] rounded-lg"
            type="number"
          />
          <hr className="solid" />

          <div className="filter_name">Компетенции</div>
          <input
            className="filter_search h-[35px] w-full border-[1px] rounded-lg"
            type="text"
          />
          <div className="inside__scroll h-40 overflow-y-auto my-2">
            {comps.map((e, index) => (
              <ul className="my-1 mx-3">
                <li key={index}>
                  <input
                    className="checkbox cursor-pointer"
                    id={e}
                    type="checkbox"
                  />
                  <label for={e} className="cursor-pointer m-1">
                    {e}
                  </label>
                </li>
              </ul>
            ))}
          </div>
          <hr className="solid" />
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
