import Image from 'next/image'
import MenuBar from '@/components/menuBar/MenuBar'
import CarruselProfiles from '@/components/carruselProfiles/CarruselProfiles'
import SearchContainer from '@/components/searchcontainer/SearchContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MenuBar/>
      <CarruselProfiles/>
      <SearchContainer/>
    </main>
  )
}
