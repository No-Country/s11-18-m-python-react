import React from 'react'
import CoachesDest from './Coaches/Coaches'
import RutinesCard from './rutinesCard/RutinesCard'
import Suscribite from './Suscribite/Suscribite'
import PublicacionTexto from '../crearPost/PublicacionTexto'
import RutinaGenerico from '../crearPost/RutinaGenerico'
import RutinaPaga from '../crearPost/RutinaPaga'
import SearchContainer from '../searchcontainer/SearchContainer'
import CarruselProfiles from './Coaches/carruselProfiles/CarruselProfiles'
import BeCoach from '../beCoach/BeCoach'

function HomeComp() {
  return (
    <>
    <h2 className='text-[28px] font-medium text-Turquesa/600 px-5 py-5'>Perfiles seguidos</h2>
    <CarruselProfiles/>
    <div className='py-7 pl-1'>
    <SearchContainer/>
    </div>
    <h2 className='text-[28px] font-medium text-Turquesa/600 px-5 py-4'>Rutinas gratuitas</h2>
    <div className='pb-9'>
    <RutinesCard/>
    </div>
    <Suscribite/>
    <h2 className='text-[28px] font-medium text-Turquesa/600 px-5 py-4'>Coaches destacados</h2>
    <CarruselProfiles/>

    <div className='px-1 py-7'>
      <BeCoach/>
    </div>

   <div className='py-8 px-1'>
<RutinaPaga/>
</div>
<div className='px-1'>
<RutinaGenerico/>
</div>
<div className='py-8 px-1'>
<PublicacionTexto/>
</div>
<div className='flex justify-center items-end my-3'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

    </>
  )
}

export default HomeComp