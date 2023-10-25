import React from 'react'
import {BsChevronRight  } from "react-icons/bs";

const InfoUsuario = () => {
  return (
    <article className='w-[380px] h-[160px] bg-black text-[20px] text-white'>

        <div className='flex border-b-white border-b-[1px] items-center justify-between p-4'>
            <h2>
                Datos personales
            </h2>
            <BsChevronRight className='text-[24px]'/>
        </div>
        <div className='flex border-b-white border-b-[1px] items-center justify-between p-4'>
            <h2>
                Mi calendario
            </h2>
            <BsChevronRight className='text-[24px]'/>
        </div>
        <div className='flex border-b-white border-b-[1px] items-center justify-between p-4'>
            <h2>
                Mis rutinas
            </h2>
            <BsChevronRight className='text-[24px]'/>
        </div>
        <div className='flex border-b-white border-b-[1px] items-center justify-between p-4'>
            <h2>
                Mi evolución
            </h2>
            <BsChevronRight className='text-[24px]'/>
        </div>

    </article>
  )
}

export default InfoUsuario