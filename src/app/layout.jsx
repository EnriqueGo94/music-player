import { IBM_Plex_Sans } from 'next/font/google';
import SearchIcon from '@mui/icons-material/Search';
import '~/styles/globals.css';
import styles from '~/styles/layout.module.css';

// Configura las fuentes de Google
const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'], // Subconjunto de caracteres
  weight: ['400', '700'], // Pesos específicos (normal y bold)
  variable: '--font-IBM-sans', // Variable CSS para la fuente Roboto
});

export const metadata = {
  title: 'deezer - Enrique Gómez Castellano',
  description: 'Technical test of Enrique Gomez Castellano',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={ibm_sans.variable}>
        <div className={styles.navbarFixedTop}>
          <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}></div>
            <div className={styles.searchInputContainer}>
              <SearchIcon/>
              <input type="text" placeholder="Search artist" />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
