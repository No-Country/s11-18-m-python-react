import React from 'react'
import CoachesDest from './Coaches/Coaches'
import RutinesCard from './rutinesCard/RutinesCard'
import Suscribite from './Suscribite/Suscribite'

import SearchContainer from './searchcontainer/SearchContainer'
import PostComp from './posts/posts'
import FollowDest from './Follow/Follow'
import BeCoach from '../beCoach/BeCoach'
import RutinaPaga from '../crearPost/RutinaPaga'
import RutinaGenerico from '../crearPost/RutinaGenerico'
import PublicacionTexto from '../crearPost/PublicacionTexto'

function HomeComp() {
  return (

<>

     
     <FollowDest/>
     <SearchContainer/>
     
    
     <RutinesCard/>

     <Suscribite/>
      <CoachesDest/>

   
       <BeCoach/>
  
<div className='w-full flex flex-col justify-evenly items-center mt-10 h-full'>
<RutinaPaga/>
 <RutinaGenerico/>
 <PublicacionTexto/>
  </div>   




     </>
  )
}

export default HomeComp