'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function InputTextComp() {
    const router = useRouter();
    const [postContent, setPostContent] = useState('');
  
    const handleInputChange = (e) => {
      const newPostContent = e.target.value;
      setPostContent(newPostContent);
  
      // Redirige a la página de creación de posts si el contenido del post es lo suficientemente largo
      if (newPostContent.trim().length > 1) {
        router.push('/a/CreatePost');
      }
    };
  return (
    <>
    <input  type="text" 
    className='bg-zinc-700 rounded-[16px] w-[308px] h-[32px] outline-none pl-2 text-white' 
     placeholder='¿Qué estás pensando, Manuel?...'
     name='search'  value={postContent}
     onChange={handleInputChange} />

    </>
     
  )
}

export default InputTextComp