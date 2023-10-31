import Link from 'next/link';
import React from 'react'
import ShowLogo from './showBar/ShowLogo';
import HamMenu from './HamMenu';
import { AiOutlineSearch } from 'react-icons/ai';



const MenuBar = ({logo}) => {
  return (
    <article className='w-full h-[64px] bg-Turqusa/200 flex justify-between items-center px-[45px]'>
        <div className='flex text-white text-2xl gap-2'>
           
            <HamMenu/>
            <AiOutlineSearch />
        </div>
        <Link href="/a" className='rounded-full'>
<ShowLogo text={logo} />
        </Link>

        <div className='rounded-full w-[48px] h-[48px]'>
            <img className='w-full h-full object-cover rounded-full' src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
        </div>

    </article>
  )
}

export default MenuBar