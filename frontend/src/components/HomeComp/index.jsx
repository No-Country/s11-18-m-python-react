import React from 'react'
import CoachesDest from './Coaches/Coaches'
import RutinesCard from './rutinesCard/RutinesCard'
import Suscribite from './Suscribite/Suscribite'
import PublicacionTexto from '../crearPost/PublicacionTexto'
import RutinaGenerico from '../crearPost/RutinaGenerico'
import RutinaPaga from '../crearPost/RutinaPaga'
import SearchContainer from '../searchcontainer/SearchContainer'

function HomeComp() {
  return (
    <>
    <SearchContainer/>
    <RutinesCard/>
    <Suscribite/>
    <CoachesDest/>
    <PublicacionTexto/>
<RutinaGenerico/>
<RutinaPaga/>

    </>
  )
}

export default HomeComp