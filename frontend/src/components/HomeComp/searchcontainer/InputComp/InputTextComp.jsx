'use client'
import CrearPost from '@/components/crearPost/CrearPost';
import React, { useState } from 'react';

function InputTextComp() {
  const [postContent, setPostContent] = useState('');
  const [crearPost, setCrearPost] = useState(false);

  const handleInputChange = (e) => {
    const newPostContent = e.target.value;
    setPostContent(newPostContent);

    // Redirige a la página de creación de posts si el contenido del post es lo suficientemente largo
    if (newPostContent.trim().length > 0) {
      setCrearPost(true); // Abrir el modal
    }
  };
  const handleCloseModal = () => {
    setCrearPost(false); // Cerrar el modal
  };

  return (
    <>
      <input
        type="text"
        className='bg-zinc-700 rounded-[16px] w-[308px] h-[32px] outline-none pl-2 text-white'
        placeholder='¿Qué estás pensando, Manuel?...'
        name='search'
        value={postContent}
        onChange={handleInputChange}
      />
      {crearPost && 
      <div className='absolute w-full h-full flex justify-center items-start top-0'>
        
        <CrearPost onClose={handleCloseModal} />
        <div className='absolute bg-Negro w-full h-full z-10 opacity-70 top-0'></div>
      </div> 
        }
    </>
  );
}

export default InputTextComp;
