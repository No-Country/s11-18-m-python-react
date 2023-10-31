import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  return (
    <article className='flex justify-between items-center px-4 w-full h-[56px]  bg-zinc-800'>
        <div>
        <input className='bg-transparent outline-none text-white'
         type="text"
         name='searchbar'
         placeholder='Buscar...' />
         </div>
         <div className='text-white'>
            <AiOutlineClose/>
         </div>
         
    </article>
  )
}

export default SearchBar