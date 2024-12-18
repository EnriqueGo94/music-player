'use client';
import styles from '~/styles/index/page.module.css';
import { useSearchStore } from '~/store/searchStore';

export default function Home() {
  const searchTerm = useSearchStore((state) => state.searchedTerm); // Obtén el estado global

  return (
    <div className={styles.mainContainer}>
      {searchTerm ? (
        <div className={styles.searchTermContainer}>
          <p className={styles.searchTermContainerTitle}>Search results for:</p>
          <p className={styles.searchTermContainerTherm}>
            {searchTerm || 'No search term entered'}
          </p>
        </div>
      ) :
        (<div style={{height: '37px'}}></div>)
      }
    </div>
  );
}
