'use client'
import CrearPost from '@/components/crearPost/CrearPost';
import React, { useState } from 'react';
import { BiImage } from 'react-icons/bi';
import { LuClapperboard } from 'react-icons/lu';



function VideoImagen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [crearPost, setCrearPost] = useState(false);

  const handleInputClick = () => {
    setCrearPost(true); // Abrir el modal
  };

  const handleCloseModal = () => {
    setCrearPost(false); // Cerrar el modal
  };

  return (
    <div className="flex flex-row items-center justify-center text-white py-3 text-2xl gap-14">
      <div className="flex items-center gap-2" onClick={handleInputClick}>
        <LuClapperboard className="text-3xl" />
        <h3 className="text-sm font-light">Video</h3>
      </div>
      <div className="flex items-center gap-2" onClick={handleInputClick}>
        <BiImage className="text-3xl" />
        <h3 className="text-sm font-light">Imagen</h3>
      </div>

      {crearPost &&   
      <div className='absolute w-full h-full flex justify-center items-start top-0 text-base'>
          <CrearPost onClose={handleCloseModal}  />
          <div className='absolute bg-Negro w-full h-full z-10 opacity-70 top-0'></div>
        </div>}
    </div>
  );
}

export default VideoImagen;
