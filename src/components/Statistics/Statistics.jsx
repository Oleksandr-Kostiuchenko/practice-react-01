import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import stats from '../../data/stats.json';

const icons = [
  <FaRegThumbsUp key="0" />,
  <MdPeople key="1" />,
  <MdOutlineProductionQuantityLimits key="2" />,
  <GiTreeDoor key="3" />,
];

const Statistics = () => {
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>

      <ul className={style.list}>
        {stats.map((element, index) => {
          console.log(element);
          return (
            <li className={style.item} key={element.id}>
              <StatisticsItem stats={element} icon={icons[index]} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
