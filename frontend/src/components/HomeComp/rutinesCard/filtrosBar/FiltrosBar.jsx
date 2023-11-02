'use client'
import React, { useState, useEffect, useRef } from 'react';
import { BsSliders } from 'react-icons/bs';
import CategoryFilters from '../categoryFilters/CategoryFilters';

const FiltrosBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      // Si el modal está abierto y el clic no está dentro del modal, ciérralo
      if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    // Agregar el event listener al documento cuando el modal está abierto
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutsideModal);
    }

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isModalOpen]);
  return (
    <div>
    <article className='bg-black rounded-[8px] w-[182px] h-[40px] flex 
      border-Turquesa/600 border-[1px] text-white px-3 items-center justify-start gap-3'>
      <button onClick={handleOpenModal}>
        <BsSliders />
      </button>
      <h1>Filtros</h1>
    </article>

    {/* Renderizar el modal (CategoryFilters) si está abierto */}
    {isModalOpen && (
      <div className="w-full flex justify-center bg-Grises/100 h-full">
        <div ref={modalRef} className="absolute top-30 right-0 w-full h-full flex justify-start flex-col z-10 items-center">
          <CategoryFilters />

        </div>
      </div>
    )}
  </div>
  );
};

export default FiltrosBar;
