import { IBM_Plex_Sans } from 'next/font/google';
import '~/styles/globals.css';
import TopBar from '~/components/TopBar';
import styles from '~/styles/index/layout.module.css';

// Configura las fuentes de Google
const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'], // Subconjunto de caracteres
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-IBM-sans',
});

export const metadata = {
  title: 'deezer - Enrique Gómez Castellano',
  description: 'Technical test of Enrique Gomez Castellano',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm_sans.variable}>
        <TopBar />
        <div className={styles.pageContainer}>{children}</div>
      </body>
    </html>
  );
}
