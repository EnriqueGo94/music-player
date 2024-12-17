import styles from '~/styles/index/page.module.css'


export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.searchTermContainer}>
            <p className={styles.searchTermContainerTitle}>Search results for:</p>
            <p className={styles.searchTermContainerTherm}>Adam Beyer</p>
        </div>
    </div>
  );
}
