'use client';
import styles from '~/styles/nav-list/nav-list.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';

export default function NavList() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMenuIconClick = () => {
    setMobileMenuVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mainMenuContainer} ref={mobileMenuRef}>
      <div className={styles.navButtonsContainer}>
        <a href="">Home</a>
        <a href="" className={styles.active}>
          Discover
        </a>
        <a href="">Recents</a>
        <a href="">Library</a>
      </div>

      <div className={styles.btnNavMenu} onClick={handleMenuIconClick}>
        <MenuIcon />
      </div>

      {isMobileMenuVisible && (
        <div className={styles.mobileMenuContainer}>
          <a href="">Home</a>
          <a href="" className={styles.active}>
            Discover
          </a>
          <a href="">Recents</a>
          <a href="">Library</a>
        </div>
      )}
    </div>
  );
}
