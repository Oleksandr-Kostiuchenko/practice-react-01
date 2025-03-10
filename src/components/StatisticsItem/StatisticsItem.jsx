import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ stats: { total, title, id }, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ size: 30, color: '#29a14f' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
