import React from 'react'
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { BiSolidHeartCircle, BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiShareFatDuotone } from "react-icons/pi";

const RutinaPaga = () => {
  return (

    <article className='w-[380px] h-[449px] bg-zinc-800 rounded-[8px] text-white'>

      <div className='flex justify-between px-3 py-5'>

    <div className='flex gap-3'>
    <div className='rounded-full w-[56px] h-[56px]'>
        <img className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
         src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
    </div>
    
    <div>    
    <h2 className='text-[18px]'>
        Pedro Valanta
    </h2>
    <p className='text-[10px]'>Publicado hace 4 hs.</p>
    </div>
    </div>

    <div className='flex items-center gap-2'>
    <button className='w-[83px] h-[32px] text-black font-semibold bg-Turquesa/500 rounded-[8px]'>
        Comprar
        </button>
        <BsThreeDotsVertical className='text-3xl'/>    
        </div>  

    </div>

    <div className='pl-5 pb-4 text-[14px] leading-[20px]'>
        <p>💥 Brazos de Acero: rutina para Ganar Fuerza 💥</p>
        <p>¿Listo para un entrenamiento enfocado en tus brazos?</p>
        <p>Esta rutina te llevará al siguiente nivel.</p>
    </div>

    <div className='w-[380px] h-[184px] pb-2'>
        <img className='w-full h-full object-cover' 
        src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img rutina paga" />
    </div>

    <div className='flex justify-between items-center px-5 pb-3'>
    <div className='flex text-xl'>
        <AiOutlineLike className=' text-blue-800'/>
        <BiSolidHeartCircle className='text-red-600'/>
    </div>
    <div className='flex gap-2 text-xl'>
     <MdOutlineOndemandVideo className='mt-1'/>
     <span>6</span>
    </div>
    </div>

    <div className='border-[1px] border-zinc-500 w-[345px] ml-4'></div>

    <div className='flex justify-end pr-3 pt-4 gap-4 text-xl'>
    <AiOutlineLike/>
    <BiComment/>
    <PiShareFatDuotone/>
    <BsBookmark/>
    </div>
   
    </article>
  )
}

export default RutinaPaga