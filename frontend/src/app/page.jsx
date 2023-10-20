import CoachesDest from '@/components/Coaches/Coaches'
import PostPage from '@/components/Posts/post'
import Suscribite from '@/components/Suscribite/Suscribite'
import Image from 'next/image'
import MenuBar from '@/components/menuBar/MenuBar'
import CarruselProfiles from '@/components/carruselProfiles/CarruselProfiles'
import SearchContainer from '@/components/searchcontainer/SearchContainer'

export default function Home() {
  return (
    <main>
      <MenuBar/>
      <CarruselProfiles/>
      <SearchContainer/>
        <Suscribite/>
    <CoachesDest/>
    </main>
  )
}
