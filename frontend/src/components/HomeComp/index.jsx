import React from 'react'
import CoachesDest from './Coaches/Coaches'
import RutinesCard from './rutinesCard/RutinesCard'
import Suscribite from './Suscribite/Suscribite'

import SearchContainer from './searchcontainer/SearchContainer'

import FollowDest from './Follow/Follow'
import BeCoach from '../beCoach/BeCoach'

import Post from '../crearPost/Post'
import PostComponent from '../crearPost/ApiPost/ApiPost'

function HomeComp() {
  return (

<>

     
     <FollowDest/>
     <SearchContainer/>
     
    
     <RutinesCard/>

     <Suscribite/>
      <CoachesDest/>

   
       <BeCoach/>
  
{/* <Post/> */}
<PostComponent/>


     </>
  )
}

export default HomeComp