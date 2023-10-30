import React from 'react'
import CoachesDest from './Coaches/Coaches'
import RutinesCard from './rutinesCard/RutinesCard'
import Suscribite from './Suscribite/Suscribite'

import SearchContainer from './searchcontainer/SearchContainer'
import PostComp from './posts/posts'

function HomeComp() {
  return (
    <div className='w-full'>
    <SearchContainer/>
    <RutinesCard/>
    <Suscribite/>
    <CoachesDest/>
    <PostComp/>
    </div>
  )
}

export default HomeComp