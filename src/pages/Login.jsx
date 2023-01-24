import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/register', {
        ...values,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mt-[25vh] bg-white w-[25vw] h-[50vh] rounded-3xl m-auto pt-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-center font-bold text-[26px] text-[#25487D]">Зарегистрироваться</h3>
          <div className="text-center mt-7">
            <label className="block" htmlFor="email">
              Почта
            </label>
            <input
              type="email"
              placeholder="Почта"
              name="email"
              className="h-[55px] w-2/3 p-5 border-[1px] border-[#888] rounded-3xl"
              onClick={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="text-center mt-5">
            <label className="block" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              placeholder="Пароль"
              name="password"
              className="h-[55px] w-2/3 p-5 border-[1px] border-[#888] rounded-3xl"
              onClick={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-[65%] py-3 bg-[#2665C5] font-medium text-white block mx-auto mt-10 rounded-3xl">
            Войти
          </button>
          <p className="text-center mt-5 font-medium">
            Нет аккаунта?{' '}
            <Link to="/auth/register" className="text-[#2665C5]">
              Зарегистрироваться
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
