import Avatar from '@/components/avatar/Avatar'
import BannerMancuernas from '@/components/bannerMancuernas/BannerMancuernas'
import PublicacionTexto from '@/components/crearPost/PublicacionTexto'
import RutinaGenerico from '@/components/crearPost/RutinaGenerico'
import RutinaPaga from '@/components/crearPost/RutinaPaga'
import EditarButton from '@/components/editarButton/EditarButton'
import FollowsComponent from '@/components/followsComponent/FollowsComponent'

import SearchContainer from '@/components/HomeComp/searchcontainer/SearchContainer'

import TabPost from '@/components/tabPost/TabPost'
import React from 'react'

const ConsigueSeguidor = () => {
  return (
    
    <main className='bg-black min-h-screen'>


        <div className=' relative'>
        <BannerMancuernas/>
        <h2 className='text-white py-4 pl-3 text-[24px]'>Manuel Hoffmann</h2>

        <div className='pl-3'>
        <FollowsComponent/>
        </div>

        <p className='text-white py-4 pl-3 font-light text-[16px]'>
        Apasionado por el fitness y la vida activa. 
        <br />
        Compartiendo mi viaje hacía mi mejor versión 🏋🏼‍♀️ ️‍
        </p>
        </div>

        <div className='absolute top-44 right-[172px]'>
        <Avatar/>
        </div>

        <div className='p-2 flex gap-9 flex-col'>
        <EditarButton/>
        <TabPost/>
        <SearchContainer/>

        <div className='my-1'>
    <div className='border-[1px] border-white w-[380px]'></div>
    </div>

        <RutinaGenerico/>
        <RutinaGenerico/>
        <RutinaPaga/>
        <PublicacionTexto/>
        </div>

        <div className='ml-36 mt-[90px] mb-5'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

    </main>
  )
}

export default ConsigueSeguidor