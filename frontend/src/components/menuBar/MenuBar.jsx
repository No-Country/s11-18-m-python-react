import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";



const MenuBar = () => {
  return (
    <article className='w-[412px] h-[64px] bg-Turqusa/200 flex justify-between items-center px-[24px]'>
        <div className='flex text-white text-2xl gap-2'>
            <AiOutlineMenu/>
            <AiOutlineSearch/>
        </div>
        <div className='bg-black w-[48px] h-[48px] rounded-full flex justify-center items-center'>
            <h1 className='text-white'>
                logo
            </h1>
        </div>
        <div className='rounded-full w-[48px] h-[48px]'>
            <img className='w-full h-full object-cover rounded-full' src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
        </div>

    </article>
  )
}

export default MenuBar