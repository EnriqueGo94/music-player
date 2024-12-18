'use client';
import styles from '~/styles/search-bar/mobile-search-bar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '~/components/SearchBar';
import { useEffect, useRef, useState } from 'react';

export default function MobileSearchBar() {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const searchBarRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearchIconClick = () => {
    setSearchBarVisible(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  const handleFormSubmit = () => {
    setSearchBarVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSearchBarVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.containerMobileSearchBar} ref={searchBarRef}>
      <div className={styles.mobileBtnSearch} onClick={handleSearchIconClick}>
        <SearchIcon />
      </div>

      {isSearchBarVisible && (
        <div className={styles.containerSearchBar}>
          <SearchBar onFormSubmit={handleFormSubmit} ref={searchInputRef} />
        </div>
      )}
    </div>
  );
}
