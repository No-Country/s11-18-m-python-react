import React from 'react'
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { BiSolidHeartCircle, BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiShareFatDuotone } from "react-icons/pi";

const PublicacionTexto = () => {
  return (

    <article className='w-[380px] h-[250px] bg-zinc-800 rounded-[8px] text-white my-2'>

    <div className='flex justify-between px-3 py-5'>

  <div className='flex gap-3'>
  <div className='rounded-full w-[56px] h-[56px]'>
      <img className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
       src="https://images.pexels.com/photos/14516256/pexels-photo-14516256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
  </div>
  
  <div>    
  <h2 className='text-[18px]'>
  Inés Gómez
  </h2>
  <p className='text-[10px]'>Publicado ayer</p>
  </div>
  </div>

  <div className='flex items-center gap-2'>
      <BsThreeDotsVertical className='text-3xl'/>    
      </div>  

  </div>

  <div className='pl-5 pb-4 text-[14px] leading-[20px]'>
      <p>Que felicidad poder aprovechar este solcito para </p>
      <p>realizar ejercicios al aire libre 😁 😁 </p>
  </div>

  <div className='flex text-xl justify-start pl-3 pb-4'>
      <AiOutlineLike className=' text-blue-800'/>
      <BiSolidHeartCircle className='text-red-600'/>
  </div>
  

  <div className='border-[1px] border-zinc-500 w-[345px] ml-4 '></div>

  <div className='flex justify-end pr-5 pt-4 gap-4 text-xl'>
  <AiOutlineLike/>
  <BiComment/>
  <PiShareFatDuotone/>
  <BsBookmark/>
  </div>
 
  </article>

  )
}

export default PublicacionTexto