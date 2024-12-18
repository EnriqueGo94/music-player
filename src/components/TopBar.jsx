import styles from '~/styles/top-bar/top-bar.module.css';
import SearchBar from '~/components/SearchBar';
import MobileSearchBar from '~/components/MobileSearchBar';
import NavList from '~/components/NavList';

export default function TopBar() {
  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}></div>
        <div className={styles.groupButtons}>
          <SearchBar className={styles.desktopSearchBar} />
          <MobileSearchBar />
          <NavList />
          <div className={styles.profileContainer}></div>
        </div>
      </div>
    </div>
  );
}
