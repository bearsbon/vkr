import {
  FaUsers,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileSignature,
  FaIdBadge,
  FaIdCard,
  FaChartLine,
} from 'react-icons/fa';
import ProgressBar from '../components/ProgressBar';

export default function Statistic() {
  let stats = [
    {
      id: 1,
      value: 236,
      icon: <FaUsers style={{}} />,
      // icon: <FaUserAlt style={{ color: '#111' }} />,
      description: 'Всего человек в базе',
    },
    {
      id: 2,
      value: 132,
      icon: <FaCheckCircle />,
      description: 'Пройдено тестирований',
    },
    {
      id: 3,
      value: 6,
      icon: <FaExclamationTriangle />,
      description: 'Провалено тестирований',
    },
    {
      id: 4,
      value: 4,
      icon: <FaFileSignature />,
      description: 'Заявок на трудоустройство',
    },
    {
      id: 5,
      value: 0,
      icon: <FaIdBadge />,
      description: 'Открытых вакансий',
    },
    {
      id: 5,
      value: 3,
      icon: <FaIdCard />,
      description: 'Закрытых вакансий',
    },
  ];

  const statItems = stats.map((item, index) => (
    <div key={index} className="stat_item">
      <div className="text-gray-700 text-[25px]">{item.icon}</div>

      <div className="absolute bottom-4">
        <div className="font-medium text-[28px] text-[#303439]">
          {item.value}
        </div>
        <div className="font-regular text-[17px]">{item.description}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="page_h1">Статистика</h1>

      <div className="stat_wrapper">{statItems}</div>
      <div className="bg-[#96baed58] rounded-2xl p-5">
        <div className="stat__chart bg-white w-[300px] my-5 rounded-xl p-7 relative shadow-lg flex flex-col items-center">
          <div>
            <ProgressBar percentage={50} />
          </div>
          {/* <FaChartLine className="text-[20px]" /> */}
          <p className="text-center my-3">
            Сотрудников прошли тестирования на оценку “удовлетворительно”
          </p>
        </div>
      </div>
    </div>
  );
}
