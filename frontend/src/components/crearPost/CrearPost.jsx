import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Avatar from '../avatar/Avatar';
import {BiImage} from "react-icons/bi";
import {LuClapperboard} from "react-icons/lu";
import Link from 'next/link';


const CrearPost = () => {
  return (
    <article className='w-[380px] h-[848px] bg-zinc-800 rounded-[8px]
     text-white border-[2px] border-zinc-600 m-1'>
        <div className='ml-24 flex items-center justify-center pt-4 gap-[128px]'>
            <h2 className='font-medium text-[18px]'>
                Crear post
            </h2>
            <Link href={"/a"}>
            <AiOutlineClose className='text-[24px]'/>
            </Link>
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

        <div>
            <input
             type="text"
             placeholder='¿Qué estás pensando, Manuel?...'
             name='post'
             className='outline-none bg-transparent pl-7 pb-8 w-[300px]' /> 
        </div>

        <div className='flex justify-center pb-[6px]'>
        <div className='w-[332px] h-[192px]'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="foto post" />
        </div>
        </div>

        <div className='flex flex-wrap gap-2 justify-center pb-3'>
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 1" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 2" />
            <img className=' border-Turquesa/500 border-4 w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 3" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 4" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 5" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 6" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/3490363/pexels-photo-3490363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 7" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 8" />
            <img className='w-[105px] h-[100px] object-cover' src="https://images.pexels.com/photos/209887/pexels-photo-209887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img post 9" />
        </div>

        <div className='flex justify-around pt-2'>
            <h2 className='border-b-Turquesa/600 border-b-2' >Galería</h2>
        
            <h2>Cámara</h2>
        
        <button className='w-[83px] h-[40px] rounded-[8px] text-black
        bg-gray-400 border-2 border-gray-600 text-[16px] font-medium'>
            Publicar
        </button>
        </div>

        <div className='border-[1px] border-zinc-500 my-4 w-[345px] ml-4'></div>

        <div className='flex flex-row items-center justify-center text-white pt-3 text-2xl gap-14'>
               <div className='flex items-center gap-6'>
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