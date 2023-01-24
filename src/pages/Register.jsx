import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const generateError = (error) => {
    toast.error(error, {
      position: 'bottom-right',
    });
  };

  const handleSubmit = async (e) => {
    try {
      const data = await axios.post('http://localhost:5000/auth/register', {
        ...values,
      });
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          //   navigate('/');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-[65%] py-3 bg-[#2665C5] font-medium text-white block mx-auto mt-10 rounded-3xl"
            onSubmit={handleSubmit}>
            Зарегистрироваться
          </button>
          <p className="text-center mt-5 font-medium">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-[#2665C5]">
              Войти
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
