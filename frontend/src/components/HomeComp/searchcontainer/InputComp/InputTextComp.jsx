'use client'
import React, { useState } from 'react';
import CrearPost from '@/components/crearPost/CrearPost';

function InputTextComp() {
  const [postContent, setPostContent] = useState('');
  const [crearPost, setCrearPost] = useState(false);

  const handleInputClick = () => {
    setCrearPost(true); // Abrir el modal
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
        onClick={handleInputClick} // Open the modal on input click
        onChange={(e) => setPostContent(e.target.value)}
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
