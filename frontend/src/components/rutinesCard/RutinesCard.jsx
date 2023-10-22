import React from 'react'
import { FiYoutube } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";

const RutinesCard = () => {
  return (
    <article className='w-[280px] h-[192px] bg-Turquesa/500 rounded-[8px] relative'>
        <BsBookmarks className='text-white absolute top-3 right-3 w-[28px] h-[28px]'/>
        <div className='w-[30px] h-[30px] bg-Turquesa/500 text-black
         rounded-[8px] absolute top-3 left-3 px-1 text-[10px] pt-1 pr-2 font-bold'>
          <h3 className='border-black rounded-[8px] border-[1px] w-[25px] h-[20px]'>Free</h3> 
            </div>
        <div className='w-[264px] h-[144px] rounded-[8px] ml-2 pt-2'>
            <img className='w-full h-full object-cover rounded-[8px]' src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hombre entrenando" />
        </div>
        <div className='flex items-center justify-between gap-3 px-3 pt-3'>
            <h3 className='font-semibold'>
                Fortalecimiento con pesas
            </h3>
            <div className='flex items-center'>
            <FiYoutube className='w-[44px] h-[24px]'/><span>6</span>
            </div>
        </div>
    </article>
  )
}

export default RutinesCard