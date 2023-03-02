import Sidebar from './components/Sidebar';
import './index.css';
import StartPage from './pages/StartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Apply from './pages/Apply';
import ContentRoutes from './components/ContentRoutes';

import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsAuth, fetchAuthMe } from './redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export default function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div>
      {isAuth ? (
        <div className="flex overflow-hidden">
          <Sidebar />
          <div className="container m-auto my-6 w-[75%] ">
            <ContentRoutes />
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      )}
    </div>
  );
}
