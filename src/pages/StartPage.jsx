import mainlogo from '../images/mainlogo.png';
import mainphoto from '../images/start_photo.png';
import mainphoto2 from '../images/group.png';
import noti from '../images/noti.png';
import noti2 from '../images/noti2.png';
import { NavLink } from 'react-router-dom';

export default function StartPage() {
  return (
    <div className="mainBG h-screen">
      <header className="flex justify-between">
        <img src={mainlogo} className="w-48" />
        <div className="mt-5">
          <NavLink to="/apply">
            <button className="px-5 py-2 lg:px-7 text-[14px]  mr-5 lg:text-[15px]  border-[1px] border-[#0760D4] bg-[#0760D4] text-white rounded-xl duration-300">
              Подать резюме
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className="px-5 py-2 lg:px-7 text-[14px] mr-5 border-[1px] text-[#0760D4] border-[#0760D4] rounded-xl duration-300 hover:bg-[#0760D4] hover:text-white">
              Войти в аккаунт
            </button>
          </NavLink>
        </div>
      </header>
      <div className="flex justify-center space-x-10 mt-[-20px] ml-10">
        <div className="left_title self-center relative top-[-20px] ml-5">
          <h2 className="font-bold text-[32px] leading-[35px] xl:text-[45px] xl:leading-[50px]">
            Построй карьеру
            <br /> в успешной компании
          </h2>
          <p className="mt-10  text-[#555] w-[25rem]  xl:w-[35rem] xl:text-[20px] font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            nihil? Dicta hic aperiam consequuntur
          </p>
          <NavLink to="/apply">
            <button className="py-3 px-5 xl:px-10  mt-10 text-[15px] xl:text-[18px] shadow-xl border-[#0760D4] bg-[#0760D4] text-white rounded-xl duration-300 active:scale-95">
              Хочу у вас работать!
            </button>
          </NavLink>

          <div className="flex mt-7">
            <div className="flex">
              <div className="flex">
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600"></div>
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600 relative left-[-10px]"></div>
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600 relative left-[-20px]"></div>
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600 relative left-[-30px]"></div>
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600 relative left-[-40px]"></div>
                <div className="w-12 h-12 border-2 rounded-full bg-cyan-600 relative left-[-50px]"></div>
              </div>

              <div className="self-center">
                <span className="font-medium text-[#35B057] relative left-[-30px]">
                  +100 человек в базе
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right_photo relative pr-5">
          <img src={mainphoto2} />
          {/* <img src={noti} className="absolute top-[400px] left-[-180px]" />
          <img src={noti2} className="absolute top-[100px] right-[-140px]" /> */}
        </div>
      </div>
      <h3 className="text-center font-bold text-[100px] text-[#CBCBCB] mt-[-45px]">
        Наша команда
      </h3>
      <div className="flex">
        <div className="our_team_slider relative mt-[-30px] flex">
          <div className="slide bg-white w-[220px] h-[225px] rounded-2xl">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
            <p className="font-medium text-center leading-5 mt-4">
              Иванов Иван
              <br /> Иванович
            </p>
            <p className="text-center">Главный бухгалтер</p>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
        </div>
        <div className="our_team_slider relative mt-[-30px] flex ">
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
            <p className="font-medium text-center leading-5 mt-4">
              Иванов Иван
              <br /> Иванович
            </p>
            <p className="text-center">Главный бухгалтер</p>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
          <div className="slide ">
            <div className="relative top-3 w-[90%] h-[60%] rounded-lg bg-slate-500 m-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
