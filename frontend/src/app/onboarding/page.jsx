import Link from 'next/link';
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const OnboardingPage = () => {
  return (
    <article className='bg-Turquesa/300 w-full h-[748px] min-h-screen flex flex-col justify-between
    bg-[url("https://images.pexels.com/photos/290416/pexels-photo-290416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
     object-contain bg-cover'>
      <div className='flex items-center justify-end text-white pt-2 pr-2'>
       <Link href={"/a"}>
       
       <h3 className='text-[19px]'>
          Omitir
        </h3>
       
       </Link> 
        <MdKeyboardArrowRight className='text-3xl pt-1'/>
      </div>
      <div className='pt-32'>
      <div className='pl-5 pb-6'>
      <h1 className='text-Turquesa/600 font-semibold text-[34px]'>
        Comparti tu progreso
      </h1>
      <h2 className='text-white text-[24px] pb-4'>
        Publica fotos de tu progreso y
        <br />
        motiva a tu seguidores
      </h2>
      </div>
      <div className='flex pb-14'>
      <div className='border-[4px] border-Turquesa/600 mt-4 w-[110px] ml-4 flex pl-16'></div>
      <div className='border-[4px] border-white mt-4 w-[110px] ml-4 flex pl-16'></div>
      <div className='border-[4px] border-white mt-4 w-[110px] ml-4 flex pl-16'></div>
      </div>
      <div className='w-full flex justify-center items-center'>
      <button className='w-5/6 h-[40px] rounded-[8px] bg-Turquesa/600 hover:bg-Turquesa/900 hover:opacity-90 duration-200 ml-4 text-[25px] font-semibold'>
        Comenzar hoy
      </button>

      </div>
        </div>
        <div className='flex justify-center pb-2'>
      <div className='border-[2px] border-white mt-4 w-[105px] ml-4 flex pl-16'></div>
      </div>
    </article>
  )
}

export default OnboardingPage