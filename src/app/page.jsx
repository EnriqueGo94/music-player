'use client';
import styles from '~/styles/index/page.module.css';
import { useSearchStore } from '~/store/searchStore';
import SongList from '~/components/SongList';

export default function Home() {
  const searchTerm = useSearchStore((state) => state.searchedTerm); // Obtén el estado global

  return (
    <div className={styles.mainContainer}>
      <SongList searchQuery={searchTerm} />
    </div>
  );
}
