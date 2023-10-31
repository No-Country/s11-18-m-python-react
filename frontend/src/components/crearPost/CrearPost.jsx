import React from 'react'
import {BiImage} from "react-icons/bi";
import {LuClapperboard} from "react-icons/lu";
import CerrarCloseButton from './PostComp/cerrarPost';
import GalleryCamara from './PostComp/GalleryCamara';


const CrearPost = ({onClose}) => {
  return (
    <article className='w-[380px] h-fit bg-zinc-800 rounded-[8px]
     text-white border-[2px] border-zinc-600 mx-1 mt-[4rem] pb-4  z-20 text-center '>
        <div className='ml-24 flex  pt-4 gap-[128px] '>
            <h2 className='font-medium text-[18px] text-center pl-6 '>
                Crear post
            </h2>
        
            <CerrarCloseButton onClose={onClose}/>
            
        </div>

        <div className='border-[1px] border-zinc-500 my-4 w-[345px] ml-4'></div>

        <div className='flex justify-start items-center gap-3 pl-7 pb-3'>
            <div className="w-[32px] h-[32px] rounded-full border-[1px] border-Turquesa/400">
            <img className='w-full h-full rounded-full object-cover'
             src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
            </div>
            <h2 className='text[18px] font-medium'>
            Manuel Hoffmann
            </h2>
        </div>

        <div className='text-left'>
            <input
             type="text"
             placeholder='¿Qué estás pensando, Manuel?...'
             name='post'
             className='outline-none bg-transparent pl-7 pb-8 w-[300px]' /> 
        </div>

        

        <GalleryCamara/>

        <div className='border-[1px] border-zinc-500 my-4 w-[345px] ml-4'></div>

        <div className='flex flex-row items-center justify-center text-white  text-2xl gap-14 '>
               <div className='flex items-center gap-2'>
                <LuClapperboard className='text-3xl'/>
                <h3 className='text-sm font-light'>Video</h3>
               </div>
                <div className='flex items-center gap-2'>
                    <BiImage className='text-3xl'/>
                    <h3 className='text-sm font-light'>Imágen</h3>
                </div>
        </div>

    </article>
  )
}

export default CrearPost