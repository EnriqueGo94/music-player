import styles from '~/styles/top-bar/top-bar.module.css';
import SearchIcon from '@mui/icons-material/Search';

export default function TopBar() {
  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}></div>
        <div className={styles.searchInputContainer}>
          <SearchIcon />
          <input type="text" placeholder="Search artist" />
        </div>
        <div className={styles.navButtonsContainer}>
          <a href="">Home</a>
          <a href="" className={styles.active}>
            Discover
          </a>
          <a href="">Recents</a>
          <a href="">Library</a>
        </div>
        <div className={styles.profileContainer}></div>
      </div>
    </div>
  );
}
