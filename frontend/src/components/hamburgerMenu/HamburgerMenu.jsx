import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


const HamburgerMenu = () => {
  return (
    <article className='bg-Turquesa/300 w-[275px] h-[733px] rounded-r-[8px] relative'>
        <AiOutlineClose className='text-white text-2xl absolute right-4 top-4 cursor-pointer'/>
        <ul className='text-white leading-[57px] pl-[28px] pt-[62px] text-xl font-light'>
            <li>Feed</li>
            <li>Rutinas</li>
            <li>Coach</li>
            <li>Mi perfil</li>
            <li>Ayuda</li>
        </ul>
    </article>
  )
}

export default HamburgerMenu