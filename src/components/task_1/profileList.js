import Profile from './profile';
import styles from './profile.module.css';

export default function ProfilesList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.tag} className={styles.item}>
          <Profile
            key={item.tag}
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}
