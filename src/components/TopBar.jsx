'use client';
import styles from '~/styles/top-bar/top-bar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]); // Histrial de búsquedas
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    if (filteredSuggestions.length > 1) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [filteredSuggestions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (searchTerm.trim() === '') return;

    // Actualizar historial de búsqueda
    const updatedHistory = [...new Set([searchTerm, ...searchHistory])].slice(
      0,
      10
    ); // Máximo 10 registros
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

    try {
      alert(`Search results fetched for: ${searchTerm}`);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = searchHistory.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const handleFocus = () => {
    if (filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className={styles.navbarMainContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}></div>
        <form
          className={`${showSuggestions && styles.searchInputContainerWithSuggestions} ${styles.searchInputContainer}`}
          onSubmit={handleSubmit}
        >
          <SearchIcon/>
          <input
            type="text"
            placeholder="Search artist"
            autoComplete="on"
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onMouseDown={(e) => e.preventDefault()} // Evita que el input pierda foco al hacer clic
                  onClick={() => {
                    setSearchTerm(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </form>
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
