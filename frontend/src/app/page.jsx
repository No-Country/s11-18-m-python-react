import CoachesDest from '@/components/Coaches/Coaches'
import PostPage from '@/components/Posts/post'
import Suscribite from '@/components/Suscribite/Suscribite'
<<<<<<< HEAD
=======
import Image from 'next/image'
import MenuBar from '@/components/menuBar/MenuBar'
import CarruselProfiles from '@/components/carruselProfiles/CarruselProfiles'
import SearchContainer from '@/components/searchcontainer/SearchContainer'
>>>>>>> cb64a83a03df384ad859563280f9b0587e70a352

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
