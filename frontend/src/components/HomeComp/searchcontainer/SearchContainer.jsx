import React from 'react'
import {LuClapperboard} from "react-icons/lu";
import {BiImage} from "react-icons/bi";
import InputTextComp from './InputComp/InputTextComp';
import VideoImagen from './InputComp/video_imagen';


const SearchContainer = () => {
  return (
    <div className='w-full flex justify-center items-center mt-2'>

   
    <article className='w-[380px] h-[120px] bg-zinc-800 rounded-[8px] flex flex-col my-2 px-3 justify-center items-center'>
        <div className='flex gap-2 justify-center pt-5'>
            <img className='rounded-full border-Turquesa/500 border-[2px] w-[32px] h-[32px]'
             src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

             
            <InputTextComp/>
             
        </div>
        <span className='border-[1px] border-zinc-500 mt-4 w-[345px] '></span>
        <VideoImagen/>
    </article>
    </div>
  )
}

export default SearchContainer