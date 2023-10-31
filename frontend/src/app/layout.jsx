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
      <body className={sen.className}>{children}</body>
    </html>
  )
}
