import styles from '~/styles/nav-list/nav-list.module.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavList() {
  return (
    <>
      <div className={styles.navButtonsContainer}>
        <a href="">Home</a>
        <a href="" className={styles.active}>
          Discover
        </a>
        <a href="">Recents</a>
        <a href="">Library</a>
      </div>

      <div className={styles.btnNavMenu}>
        <MenuIcon />
      </div>

    </>
  );
}
