import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsDot } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function Apply() {
  const formArray = [1, 2, 3];
  const [step, setstep] = useState(formArray[0]);
  const [state, setState] = useState({
    name: '',
    dept: '',
    batch: '',
    age: '',
    varsity: '',
    session: '',
    address: '',
    district: '',
    thana: '',
    post: '',
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (step === 1 && state.name && state.dept && state.batch) {
      setstep(step + 1);
    } else if (step === 2 && state.varsity && state.session && state.address) {
      setstep(step + 1);
    } else {
      toast.error('Пожалуйста заполните все поля');
    }
  };

  const goBack = () => {
    setstep(step - 1);
  };

  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('Резюме отправлено успешно');
    } else {
      toast.error('Пожалуйста заполните все поля');
    }
  };

  return (
    <div className="mt-[20vh] flex justify-center items-center ">
      <ToastContainer />
      <div className="w-[30vw] rounded-sm bg-white p-5 border-[1px] border-[#c8c8c8]">
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  step - 1 === i ||
                  step - 1 === i + 1 ||
                  step === formArray.length
                    ? 'bg-sky-700'
                    : 'bg-transparent text-gray-600 border-[1px] border-slate-400'
                } h-[34px] flex justify-center items-center`}>
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    step === i + 2 || step === formArray.length
                      ? 'bg-sky-700'
                      : 'bg-slate-400'
                  }`}></div>
              )}
            </>
          ))}
        </div>
        {step === 1 && (
          <div>
            <h2 className="justify-center">Расскажите о себе</h2>
            <div className="flex flex-col justify-center items-center mb-2">
              <label className="self-start" htmlFor="name">
                ФИО
              </label>
              <input
                value={state.name}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md w-1/2"
                type="text"
                name="name"
                placeholder="Полное ФИО"
                id="name"
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-2">
              <label className="self-start" htmlFor="name">
                Возраст
              </label>
              <input
                value={state.age}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md w-1/2"
                type="number"
                name="age"
                placeholder="Возраст"
                id="age"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="dept">Номер телефона</label>
              <input
                value={state.dept}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="dept"
                placeholder="Номер телефона"
                id="dept"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="batch">Почта</label>
              <input
                value={state.batch}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="batch"
                placeholder="Почта"
              />
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
              <button
                onClick={next}
                className="px-3 py-2 mb-3 text-lg rounded-md w-full text-white bg-blue-500 hover:bg-blue-600">
                Следующий шаг
              </button>
              <NavLink to="/">
                <button
                  onClick={next}
                  className="px-2 text-md rounded-md text-gray-700 ">
                  На главную
                </button>
              </NavLink>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-5">
            <div className="flex flex-col mb-5">
              <label
                className="text-gray-700 font-medium text-[18px]"
                htmlFor="varsity">
                Образование
              </label>
              <p className="text-slate-600 text-sm">
                Пример: окончил Тюменский государственный университет по
                специальности строитель
              </p>
              <input
                value={state.varsity}
                onChange={inputHandle}
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
                type="text"
                name="varsity"
                placeholder=""
                id="varsity"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="text-gray-700 font-medium text-[18px]"
                htmlFor="session">
                Опишите опыт работы
              </label>
              <p className="text-slate-600 text-sm">
                Пример: работал в период 2004-2007 в компании “Название” на
                позиции менеджера
              </p>
              <textarea
                value={state.session}
                onChange={inputHandle}
                row="10"
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md resize-none h-[85px] text-[14px]"
                type="text"
                name="session"
                placeholder=""
                id="session"></textarea>
            </div>
            <div className="flex flex-col mb-5">
              <label
                className="text-gray-700 font-medium text-[18px]"
                htmlFor="address">
                Опишите подробнее чем занимались
              </label>
              <p className="text-slate-600 text-sm">
                Пример: ежедневно отправлял клиентам компании, работающим с
                электронным документооборотом, закрывающие документы (70
                комплектов в день).
              </p>
              <textarea
                value={state.address}
                onChange={inputHandle}
                row="10"
                className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md resize-none h-[85px] text-[14px]"
                type="number"
                name="address"
                placeholder=""></textarea>
            </div>
            <div className="mt-4 gap-3 flex flex-col justify-center items-center">
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500 hover:bg-blue-600">
                Следующий шаг
              </button>
              <button
                onClick={goBack}
                className="px-2 text-md rounded-md text-gray-700 ">
                Назад
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mt-4 gap-3 flex flex-col justify-center items-center">
              <h3>Загрузите свою фотографию</h3>
              <div className="rounded-full bg-gray-300 w-32 h-32"></div>
              <div className="flex justify-center items-center">
                <input className="" type="file" />
              </div>
              <div className="">
                <p className="font-semibold text-[#49505B] mb-3">
                  Требования к фотографии:
                </p>
                <ul className="text-[14px]">
                  <li className="flex mb-2">
                    <div className="circle"></div> Фон нейтрального цвета
                    (белого/серого)
                  </li>
                  <li className="flex mb-2">
                    <div className="circle"></div>Взгляд направлен прямо в
                    камеру
                  </li>
                  <li className="flex mb-2">
                    <div className="circle"></div>Отсутствуют аксессуары,
                    закрывающие лицо
                  </li>
                </ul>
              </div>

              <button
                onClick={finalSubmit}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500 hover:bg-blue-600">
                Отправить резюме
              </button>
              <button
                onClick={goBack}
                className="px-2 text-md rounded-md text-gray-700 ">
                Назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
