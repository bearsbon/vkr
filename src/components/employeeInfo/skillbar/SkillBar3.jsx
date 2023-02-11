// https://www.youtube.com/watch?v=IVdQvpztUHg&ab_channel=KaimulJewel

import Child from './child';
import './skillbar3.css';

const items = [
  {
    id: '1',
    skill: 'HTML5',
    percentage: '90%',
  },
  {
    id: '2',
    skill: 'CSS3',
    percentage: '80%',
  },
  {
    id: '3',
    skill: 'JAVASCRIPT',
    percentage: '70%',
  },
  {
    id: '4',
    skill: 'REACT',
    percentage: '80%',
  },
  {
    id: '5',
    skill: 'VUE',
    percentage: '90%',
  },
];

const SkillBar2 = () => {
  return (
    <div className="skillbar_container">
      {items.map((item) => {
        return <Child key={item.id} skill={item.skill} percentage={item.percentage} />;
      })}
    </div>
  );
};

export default SkillBar2;
