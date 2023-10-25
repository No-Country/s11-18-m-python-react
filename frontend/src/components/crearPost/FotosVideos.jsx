import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {BiImage} from "react-icons/bi";
import {LuClapperboard} from "react-icons/lu";

const FotosVideos = () => {

  return (
    <article className='w-[380px] h-[400px] bg-zinc-800 rounded-[8px] text-white'>

<div className='ml-24 flex items-center justify-center pt-4 gap-[128px] pb-3'>
            <h2 className='font-medium text-[18px]'>
                Crear post
            </h2>
            <button>
            <AiOutlineClose className='text-[24px]'/>
            </button>
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

        <div className='flex justify-center'>
        <div className='w-[332px] h-[120px] rounded-[8px] bg-zinc-500
        flex justify-center flex-col items-center leading-7'>

            <BiImage className='text-3xl mb-1'/>
            <h3>Agregar fotos/videos</h3>
            <h4>o arrastra y suelta</h4>

        </div>
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

export default FotosVideos