'use client';
import styles from '~/styles/search-bar/search-bar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import { forwardRef, useEffect, useState } from 'react';
import { useSearchStore } from '~/store/searchStore';

export default forwardRef(function SearchBar({ className, onFormSubmit }, ref) {
  const [searchTerm, setSearchTerm] = useState();
  const [searchHistory, setSearchHistory] = useState([]); // Histrial de búsquedas
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const setSearchedTerm = useSearchStore((state) => state.setSearchedTerm); // Acción para actualizar el estado global

  useEffect(() => {
    handleSubmit(new Event('submit'), 'Eminem');
  }, []);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    if (filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [filteredSuggestions]);

  const handleSubmit = async (e, term) => {
    e.preventDefault();

    const finalSearchTerm = term || searchTerm;

    setShowSuggestions(false);

    if (onFormSubmit) {
      onFormSubmit();
    }
    if (finalSearchTerm.trim() === '') return;

    // Actualizar historial de búsqueda
    const updatedHistory = [
      ...new Set([finalSearchTerm, ...searchHistory]),
    ].slice(0, 10); // Máximo 10 registros
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

    try {
      setSearchedTerm(finalSearchTerm);
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

  const handleDeleteSuggestion = (suggestionToDelete) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== suggestionToDelete
    );
    setSearchHistory(updatedHistory);

    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

    setFilteredSuggestions(updatedHistory);
  };

  const handleSuggestionSelect = (e, suggestion) => {
    e.preventDefault(); // Previene conflictos con el foco o cierre del menú
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    handleSubmit(new Event('submit'), suggestion);
  };

  return (
    <form
      className={`${showSuggestions ? styles.searchInputContainerWithSuggestions : ''} ${styles.searchInputContainer} ${className || ''}`}
      onSubmit={handleSubmit}
    >
      <SearchIcon />
      <input
        ref={ref}
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
            <li key={index} className={styles.suggestionItem}>
              <span
                onMouseDown={(e) => handleSuggestionSelect(e, suggestion)} // Desktop
                onTouchStart={(e) => handleSuggestionSelect(e, suggestion)} // Mobile
              >
                {suggestion}
              </span>
              <button
                type="button"
                className={styles.deleteButton}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleDeleteSuggestion(suggestion)}
                aria-label="Delete suggestion"
              >
                <CloseIcon fontSize="small" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
});
