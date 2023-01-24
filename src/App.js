import Sidebar from './components/Sidebar';
import './index.css';
import StartPage from './pages/StartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ContentRoutes from './components/ContentRoutes';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

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
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}
