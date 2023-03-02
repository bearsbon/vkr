import React from 'react';
import ava from './../images/mark-cukerberg.jpg';

import {
  FiPhone,
  FiMail,
  FiPlus,
  FiSliders,
  FiX,
  FiBriefcase,
  FiTrendingUp,
} from 'react-icons/fi';

import { BsInfo } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';

export default function Resume() {
  const workExp = [
    { years: '2004-2007', location: 'Лукойл', position: 'Экономист' },
    { years: '2007-20010', location: 'Газпром', position: 'Бухгалтер' },
    { years: '2010-2020', location: 'Роснефть', position: 'HR менеджер' },
  ];

  const edExp = [
    {
      years: '2004-2007',
      university: 'Уральский Федеральный университет',
      specialisation: 'Бакалавриат по специальности маркетинг',
    },
    {
      years: '2007-2010',
      university: 'Уральский Федеральный университет',
      specialisation: 'Бакалавриат по специальности маркетинг',
    },
  ];

  const skillsItems = [
    {
      name: 'Компетенция1',
      color: '#f97316',
    },
    {
      name: 'Компетенция2',
      color: '#6ee73c',
    },
    {
      name: 'Компетенция3',
      color: '#c53ce7',
    },
    {
      name: 'Компетенция4',
      color: '#3ce7c7',
    },
  ];

  const exp = workExp.map((item) => (
    <div key={item} className="education__wrapper">
      <div className="flex ml-10">
        <div className="bg-[#2F89FE] w-[11px] h-[11px] rounded-full mt-[8px] mr-[18px]"></div>
        <span className="year font-semibold text-lg text-[#2F89FE]">
          <input
            type="text"
            value={item.years}
            className="border-2 w-36 h-9 float-right"
          />
        </span>
      </div>
      <div>
        <div className=" font-semibold text-lg text-[#2F89FE]">
          <input
            type="text"
            value={item.location}
            className="border-2 w-full h-9 float-right"
          />
        </div>
        <div className=" font-medium text-m">
          <input
            type="text"
            value={item.position}
            className="border-2 w-full h-9 float-right"
          />
        </div>
      </div>
    </div>
  ));

  const ed = edExp.map((item) => (
    <div key={item} className="education__wrapper">
      <div className="flex ml-10">
        <div className="bg-[#2F89FE] w-[11px] h-[11px] rounded-full mt-[8px] mr-[18px]"></div>
        <span className="year font-semibold text-lg text-[#2F89FE]">
          <input
            type="text"
            value={item.years}
            className="border-2 w-36 h-9 float-right"
          />
        </span>
      </div>
      <div className="flex flex-col">
        <div className=" font-semibold text-lg text-[#2F89FE]">
          <input
            type="text"
            value={item.university}
            className="border-2 w-full h-9 float-right"
          />
        </div>
        <div className=" font-medium text-m">
          <input
            type="text"
            value={item.specialisation}
            className="border-2 w-full h-9 float-right"
          />
        </div>
      </div>
    </div>
  ));

  const skills = skillsItems.map((item) => (
    <div
      key={item}
      className="skill__item"
      style={{ backgroundColor: item.color }}>
      {item.name}
      <div className="skill__delete">
        <FiX />
      </div>
    </div>
  ));

  return (
    <div className="text-[#303439] ">
      <h1 className="text-[22px] font-semibold text-[#303439] ">Мое резюме</h1>
      <button className="bg-sky-700 text-white px-5 py-2 rounded-lg active:scale-[.98] block ml-auto">
        Сохранить
      </button>
      <div className="resume__content overflow-auto overflow-x-hidden mt-4">
        <div className="left mx-auto">
          <img src={ava} alt="ava" class="mx-auto w-[250px] rounded-full" />

          <div className="resume__h3 ">Обо мне</div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold ">Возраст:</span>
            <input type="number" className="border-2 w-20 h-9 float-right" />
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Пол:</span>
            <input type="text" className="border-2 w-40 h-9 float-right" />
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Должность:</span>
            <input type="text" className="border-2 w-36 h-9 float-right" />
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Стаж:</span>
            <input type="number" className="border-2 w-20 h-9 float-right" />
          </div>

          <div className="resume__h3 ">Контакты</div>
          <div className="font-medium mt-4 text-[18px] flex">
            <div className="resume__icon">
              <FiPhone />
            </div>
            <input type="text" className="border-2 w-46 h-9" maxlength="12" />
          </div>
          <div className="font-medium mt-4 text-[18px] flex">
            <div className="resume__icon">
              <FiMail />
            </div>
            <input type="text" className="border-2 w-46 h-9" />
          </div>
        </div>

        <div className="right ml-3">
          <h3 className="text-center font-bold text-[44px] text-[#303439] my-5">
            <input
              type="text"
              className="border-2 w-2/3 h-10 text-[25px] text-center"
            />
          </h3>
          <div className="border__box">
            <div className="flex leading-9 text-[32px] text-[#2F89FE] font-semibold ">
              <div className="resume__icon">
                <FiSliders />
              </div>
              <h4>Компетенции</h4>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {skills}
              <button className="text-[25px] text-[#5c5c5c] p-1 inline-block bg-slate-300 hover:bg-slate-400 transition rounded-lg active:scale-95">
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="border__box">
            <div className="flex text-[32px] text-[#2F89FE] font-semibold leading-9">
              <div className="resume__icon inline-block">
                <SlGraduation />
              </div>
              <h4>Образование</h4>
            </div>

            {ed}
            <div className="education__wrapper">
              <button className="col-start-2 text-[18px] text-[#464646] py-1 px-10 inline-block bg-slate-300 hover:bg-slate-400 transition rounded-sm active:scale-95">
                Добавить
                <FiPlus className="inline-block" />
              </button>
            </div>
          </div>

          <div className="border__box">
            <div className="flex leading-9 text-[32px] text-[#2F89FE] font-semibold ">
              <div className="resume__icon inline-block">
                <FiBriefcase />
              </div>
              <h4 className="">Опыт работы</h4>
            </div>
            {exp}
            <div className="education__wrapper">
              <button className="col-start-2 text-[18px] text-[#464646] py-1 px-10 inline-block bg-slate-300 hover:bg-slate-400 transition rounded-sm active:scale-95">
                Добавить
                <FiPlus className="inline-block" />
              </button>
            </div>
          </div>

          <div className="border__box">
            <div className="flex leading-9 text-[32px] text-[#2F89FE] font-semibold mb-5">
              <div className="resume__icon inline-block">
                <FiTrendingUp />
              </div>
              <h4 className="">Уровень владения</h4>
            </div>
          </div>

          <div className="border__box">
            <div className="flex leading-9 text-[32px] text-[#2F89FE] font-semibold mb-5">
              <div className="resume__icon inline-block">
                <BsInfo />
              </div>
              <h4 className="">Подробнее</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              excepturi quia officia impedit pariatur quae voluptatem vero
              eveniet eos quasi! Inventore itaque vero, possimus impedit officia
              ipsa nihil eveniet debitis! Maxime corrupti fugit, ipsum illo
              saepe architecto rem id, sed dolores nisi voluptas, alias
              reprehenderit! Officia eaque itaque ducimus magnam modi, iure
              quibusdam illo vitae! Eos mollitia provident asperiores explicabo?
              Beatae, rem itaque soluta nesciunt voluptas laborum impedit in
              ullam, perferendis aperiam id, porro optio quidem. Iste facere
              ullam eius, adipisci, ipsa rerum neque minus nulla, illum autem ex
              perspiciatis? Iste vitae hic cumque tempore maiores officia
              quisquam earum sit commodi laborum ducimus blanditiis temporibus
              enim odio repudiandae, laboriosam id, alias dolor dignissimos
              similique tenetur et. Excepturi optio debitis aliquam?
              Perspiciatis quae sit nam animi accusantium, incidunt quisquam vel
              eos, architecto sint vitae enim necessitatibus facilis sed, autem
              commodi optio debitis veniam asperiores fugit voluptas alias. Sunt
              numquam voluptatum incidunt? Officia commodi veritatis dolor
              incidunt eveniet id quo placeat quam corrupti dolores. Voluptatum
              fuga possimus excepturi quod sequi odio tempore veniam id
              blanditiis accusamus, at corporis sint autem ut omnis. Sit
              eligendi obcaecati voluptatum quis tempora? Dolores enim, quam
              quibusdam nihil at nulla earum architecto consequatur facilis
              recusandae possimus, porro quo repudiandae molestias, ullam itaque
              saepe impedit quas in inventore? Vitae animi reiciendis esse modi
              iste, odio blanditiis beatae cupiditate quod nihil assumenda
              explicabo obcaecati officiis ut non. Commodi aut magni corporis
              molestias eum magnam repellendus laborum accusantium officiis est!
              Fugit, modi quisquam excepturi odio ex eveniet enim natus sed
              distinctio quam saepe dignissimos molestiae nemo numquam
              blanditiis. Cum architecto impedit sit molestias quis. Soluta
              fugiat repellat facilis porro molestias. At eos officia iure
              suscipit doloribus. Rem excepturi doloremque cumque, sunt ducimus
              ad obcaecati maxime harum voluptas illo repudiandae dignissimos
              voluptatem nam omnis nostrum, minima perferendis, accusantium
              porro nobis? Sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
