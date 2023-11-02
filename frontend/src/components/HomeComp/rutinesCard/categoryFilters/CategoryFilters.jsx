import React from 'react'
import { BiChevronDown } from "react-icons/bi";

const CategoryFilters = () => {
  return (
    <article className='w-full h-[280px] rounded-md bg-Turqusa/200 text-white pt-5 px-2'>
            
            <div className='mb-4'>
            <h2 className='text-[16px] pb-2'>
                Categorías
            </h2>
            <div className='w-[372px] h-[40px] bg-black border-[1px] border-Turquesa/600
             flex justify-between items-center px-3'>
                 <h3 className='[14px]'>Todas</h3>
                <BiChevronDown className='text-[44px]'/>
            </div>
            </div>
            
            <div className='mb-4'>
            <h2 className='text-[16px] pb-2' >
                Duración
            </h2>
            <div className='w-[372px] h-[40px] bg-black border-[1px] border-Turquesa/600
             flex justify-between items-center px-3'>
                <h3 className='[14px]'>Todas</h3> 
                <BiChevronDown className='text-[44px]'/>
            </div>
            </div>
            
            <div className=''>
            <h2 className='text-[16px] pb-2'>
                Dificultad
            </h2>
            <div className='w-[372px] h-[40px] bg-black border-[1px] border-Turquesa/600
             flex justify-between items-center px-3'>
              <h3 className='[14px]'>Todas</h3>
                <BiChevronDown className='text-[44px]'/>
            </div>
            </div>

    </article>
  )
}

export default CategoryFilters