import React from 'react'
import { FiYoutube } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import { ROUTINECONTENT } from './RutinaCon';



const  RutinesCard =  () => {

  return ( 
    <div className='grid grid-cols-2'>
    
{    ROUTINECONTENT.map((routine) =>{
  
    return(
      <Link href={`/a/${routine.RoutineID}`}>
      <article className='w-1/2 h-[192px] bg-Turquesa/500 rounded-[8px] relative my-2' key={routine.RoutineID}>
          <BsBookmarks className='text-white absolute top-3 right-3 w-[28px] h-[28px]'/>
          <div className='w-[30px] h-[30px] bg-Turquesa/500 text-black
           rounded-[8px] absolute top-3 left-3   flex items-center justify-center' key={routine.type.typeid}>
            {routine.type.src}
              </div>
          <div className='w-[264px] h-[144px] rounded-[8px] ml-2 pt-2'>
              <img src={routine.img}  className='rounded-[8px] ' alt={routine.title} />
          </div>
          <div className='flex items-center justify-between gap-3 px-3 pt-3'>
              <h3 className='font-semibold'>
                  {routine.title}
              </h3>
              <div className='flex items-center'>
              <FiYoutube className='w-[44px] h-[24px]'/><span>{routine.number}</span>
              </div>
          </div>
      </article>
      </Link>
  
    )
  })}
    
    </div>
)}

export default RutinesCard
