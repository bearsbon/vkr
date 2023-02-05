import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../redux/authSlice';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));
    console.log(data);
    if (!data.payload) {
      return alert('Не удалось зарегистрироваться');
    }
    window.localStorage.setItem('token', data.payload.token);
  };

  if (isAuth) {
    return <Navigate to="/stat" />;
  }

  return (
    <div>
      <div className="mt-[20vh] p-10 border-[1px] border-[#c8c8c8] bg-white max-w-[500px] min-h-[50vh] rounded-sm m-auto pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center font-bold text-[22px] text-[#25487D]">
            Регистрация
          </h3>
          <div className="text-center mt-5">
            <label className="block" htmlFor="email">
              Полное ФИО
            </label>
            <input
              type=""
              placeholder="Почта"
              name="email"
              className="auth__input h-[55px] w-3/4 p-5 border-[1px] border-[#dadada] rounded-md"
              {...register('fullName', { required: 'Необходимо указать ФИО' })}
            />
          </div>
          <div className="text-center mt-5">
            <label className="block" htmlFor="email">
              Почта
            </label>
            <input
              type=""
              placeholder="Почта"
              name="email"
              className="auth__input h-[55px] w-3/4 p-5 border-[1px] border-[#dadada] rounded-md"
              {...register('email', { required: 'Необходимо указать почту' })}
            />
          </div>
          <div>{errors?.email && <p>{errors?.email.message}</p>}</div>
          <div className="text-center mt-5">
            <label className="block" htmlFor="password">
              Пароль
            </label>
            <input
              type="password"
              placeholder="Пароль"
              name="password"
              className="auth__input h-[55px] w-3/4 p-5 border-[1px] border-[#dadada] rounded-md"
              {...register('password', {
                required: 'Необходимо указать пароль',
              })}
            />
          </div>
          <div>{errors?.password && <p>{errors?.password.message}</p>}</div>
          <button
            type="submit"
            disabled={!isValid}
            className="submit__btn min-w-[335px] py-3 bg-[#2665C5] font-medium text-white block mx-auto mt-10 rounded-lg disabled:bg-slate-300">
            Зарегистрироваться
          </button>
          <p className="text-center mt-5 font-medium">
            Уже зарегистрированы?{' '}
            <Link to="/login" className="text-[#2665C5]">
              Войти в аккаунт
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
