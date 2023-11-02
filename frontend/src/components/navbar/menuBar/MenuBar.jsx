import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Image from 'next/image';
import HamMenu from './HamMenu';



const MenuBar = ({logo}) => {
  return (
    <article className='w-full h-[64px] bg-Turqusa/200 flex justify-between items-center px-[45px] relative'>
        <div className='flex text-white text-2xl gap-2'>
           
            <HamMenu/>
            {/* <AiOutlineSearch /> */}
        </div>
        <Link href="/a" className='rounded-full'>
        <div className='bg-black w-[48px] h-[48px] rounded-full flex justify-center items-center'>
         
            <div className='w-fit h-fit flex justify-center items-center border-2 border-Turquesa/500 rounded-full'>
                <Image width={112} height={116} src="/images/logo.png" alt="logo" />
            </div>
            
            
        </div>
        </Link>

        <div className='rounded-full w-[48px] h-[48px]'>
            <Link href={"/a/Perfil"}>
            <img className='w-full h-full object-cover rounded-full' src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
            
            </Link>
        </div>

    </article>
  )
}

export default MenuBar