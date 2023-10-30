import NavBar from "@/components/navbar/navbar"

export const metadata = {
  title: 'GymMate',
  description: 'Aplicacion de deportes y social',
}

export default function RootLayout({ children }) {
  return (
      <>
      <NavBar/>
      {children}
      
      </>
  )
}
