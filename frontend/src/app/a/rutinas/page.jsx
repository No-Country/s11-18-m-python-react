import CategoryCardComp from '@/components/categoryCard/EquilibrioCard'

import FiltrosBar from '@/components/HomeComp/rutinesCard/filtrosBar/FiltrosBar'
import RutinesCard from '@/components/HomeComp/rutinesCard/RutinesCard'
import TabsBar from '@/components/tabsBar/TabsBar'
import React from 'react'

const Rutinas = () => {
  return (
    <section className='min-h-screen w-full bg-black'>


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
      <CategoryCardComp/>
        </div>

        <div className='bg-white w-28  h-[5px] mt-32 mb-4 ml-[150px]'></div>

    </section>
  )
}

export default Rutinas