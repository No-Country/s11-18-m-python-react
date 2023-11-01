import './globals.css'
import { Sen } from 'next/font/google'

const sen = Sen({ subsets: ['latin'] })

export const metadata = {
  title: 'GymMate',
  description: 'Aplicacion de deportes y social',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
         <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dhb9rdaoc/image/upload/v1698797496/qmytjvbdgvdl1s41s2zt.png"/>

        </head>
      <body className={sen.className}>{children}</body>
    </html>
  )
}
