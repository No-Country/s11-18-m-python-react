import EquilibrioCard from '@/components/categoryCard/EquilibrioCard'
import FlexCard from '@/components/categoryCard/FlexCard'
import FuerzaCard from '@/components/categoryCard/FuerzaCard'
import ResistCard from '@/components/categoryCard/ResistCard'
import FiltrosBar from '@/components/filtrosBar/FiltrosBar'
import MenuBar from '@/components/menuBar/MenuBar'
import RutinesCard from '@/components/rutinesCard/RutinesCard'
import SearchBar from '@/components/searchBar/SearchBar'
import StatusBar from '@/components/statusBar/StatusBar'
import TabsBar from '@/components/tabsBar/TabsBar'
import React from 'react'

const Rutinas = () => {
  return (
    <section className='min-h-screen max-w-[390px] bg-black'>

        <StatusBar/>
        <MenuBar/>
        <SearchBar/>

        <div className='pl-4 py-7'>
        <FiltrosBar/>
        </div>

        <TabsBar/>

        <div className='pl-4 py-[37px]'>
        <h2 className='text-Turquesa/600 font-semibold text-[27px] pb-4'>Fuerza</h2>
        <RutinesCard/>
        </div>

        <div className='pl-4 pb-[40px]'>
        <h2 className='text-Turquesa/600 font-semibold text-[27px] pb-4'>Tendencia</h2>
        <RutinesCard/>
        </div>

        <h2 className='text-Turquesa/600 font-semibold text-[27px] pb-5 pl-4'>Categorías</h2>

        <div className='flex flex-col items-center gap-[70px]  mb-9'>
        <EquilibrioCard/>
        <FlexCard/>
        <FuerzaCard/>
        <ResistCard/>
        </div>

        <div className='bg-white w-28  h-[5px] mt-32 mb-4 ml-[150px]'></div>

    </section>
  )
}

export default Rutinas