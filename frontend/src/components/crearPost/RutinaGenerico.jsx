import React from 'react'
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { BiSolidHeartCircle, BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiShareFatDuotone } from "react-icons/pi";
import Image from 'next/image';

const RutinaGenerico = () => {
  return (

    <article className='w-[380px] h-[449px] bg-zinc-800 rounded-[8px] text-white my-2'>

    <div className='flex justify-between px-3 py-5'>

  <div className='flex gap-3'>
  <div className='rounded-full w-[56px] h-[56px]'>
      <img className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
       src="https://images.pexels.com/photos/14516256/pexels-photo-14516256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
  </div>
  
  <div>    
  <h2 className='text-[18px]'>
  Jimena Castro
  </h2>
  <p className='text-[10px]'>Publicado hace 9 hs.</p>
  </div>
  </div>

  <div className='flex items-center gap-2'>
      <BsThreeDotsVertical className='text-3xl'/>    
      </div>  

  </div>

  <div className='pl-5 pb-4 text-[14px] leading-[20px]'>
      <p>Tener buenos resultados es cuestión de esfuerzos.</p>
      <p>Disfruta lo que haces y pronto verás que valió la pena</p>
      <p>perseverar.</p>
  </div>

  <div className='w-[380px] h-[184px] pb-2'>
      <Image width={380} height={184} 
      src="/images/publicaciongenerico.png" alt="img rutina paga" />
  </div>

  <div className='flex text-xl items-center justify-start px-5 pb-3'>
      <AiOutlineLike className=' text-blue-800'/>
      <BiSolidHeartCircle className='text-red-600'/>
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

export default RutinaGenerico