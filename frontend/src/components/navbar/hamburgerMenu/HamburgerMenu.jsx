'use client'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import CloseButton from './CloseButton';
import Link from 'next/link';


const HamburgerMenu = ({toggleOpen}) => {
  const [CloseView, SetCloseView] = useState(true)

  const handleClose = () => {
    SetCloseView(!CloseView);
    toggleOpen(true)
  }
  return (
    <article className={  CloseView ?  `bg-Turquesa/300 w-[275px] h-[733px] rounded-r-[8px] absolute bottom-[-25.71em] z-30 left-0` : `hidden`}>
  <CloseButton  ButtonClose={handleClose}  />        
  <ul className='text-white leading-[57px] pl-[28px] pt-[62px] text-xl font-light'>
            <li>
              <Link href={"/a"}>
              
              Feed
              </Link>
              
              </li>
            <li>
              <Link href={"/a/rutinas"}>
              
              Rutinas
              </Link>
              
              </li>
            <li>
              <Link href={"/a/coach"}>
              
              Coach
              </Link>
              
              </li>
            <li>
              <Link href={"/a/perfil"}>
              
              Mi perfil
              </Link>
              
              </li>
            <li>
              <Link href={"/a/ayuda"}>
              
              Ayuda
              </Link>
               
              </li>
        </ul>
    </article>
  )
}

export default HamburgerMenu