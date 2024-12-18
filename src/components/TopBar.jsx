import styles from '~/styles/top-bar/top-bar.module.css';
import SearchBar from '~/components/SearchBar';
import MobileSearchBar from '~/components/MobileSearchBar';

export default function TopBar() {
  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}></div>
        <SearchBar className={styles.desktopSearchBar} />
        <MobileSearchBar />
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
