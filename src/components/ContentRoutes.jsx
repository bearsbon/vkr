import { Route, Routes } from 'react-router-dom';
import Resume from '../pages/Resume';
import Employees from '../pages/Employees';
import Test from '../pages/Test';
import Statistic from '../pages/Statistic';

export default function ContentRoutes() {
  return (
    <Routes>
      <Route path="/stat" element={<Statistic />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/test" element={<Test />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
