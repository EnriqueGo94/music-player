import {IBM_Plex_Sans} from "next/font/google"

import "~/app/globals.css"


// Configura las fuentes de Google
const ibm_sans = IBM_Plex_Sans({
    subsets: ["latin"], // Subconjunto de caracteres
    weight: ["400", "700"], // Pesos específicos (normal y bold)
    variable: "--font-IBM-sans", // Variable CSS para la fuente Roboto
});


export const metadata = {
    title: "deezer - Enrique Gómez Castellano", description: "Technical test of Enrique Gomez Castellano",
};

export default function RootLayout({children}) {
    return (<html lang="es">
        <body className={ibm_sans.variable}>
            {children}
        </body>
    </html>);
}
