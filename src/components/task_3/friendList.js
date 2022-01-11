import PropTypes from 'prop-types';
import style from './friends.module.css';

export default function IsOnline({ items }) {
  return (
    <ul className={style.list}>
      {items.map(item => (
        <li className={style.item} key={item.id}>
          <span
            className={style.status}
            style={{
              backgroundColor: item.isOnline ? '#44EE33' : '#F32B00',
            }}
          ></span>
          <img
            className={style.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={style.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
IsOnline.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
