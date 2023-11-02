'use client'
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

const OnboardingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/onboarding.png',
    'https://images.pexels.com/photos/18857888/pexels-photo-18857888/free-photo-of-ciudad-hombres-parque-haciendo-footing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const getBorderStyle = (index) => {
    return index === currentImageIndex
      ? 'border-[4px] border-Turquesa/600'
      : 'border-[4px] border-white';
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <article className='w-full h-[748px] min-h-screen flex flex-col justify-between object-contain absolute z-10'>
        <div className='flex items-center justify-end text-white pt-2 pr-2'>
          <Link href={'/a'}>
            <h3 className='text-[19px]'>Omitir</h3>
          </Link>
          <MdKeyboardArrowRight className='text-3xl pt-1' />
        </div>
        <div className='pt-32 flex flex-col items-center'>
          <div className='pl-5 pb-6'>
            <h1 className='text-Turquesa/600 font-semibold text-[34px]'>
              Comparti tu progreso
            </h1>
            <h2 className='text-white text-[24px] pb-4'>
              Publica fotos de tu progreso y
              <br />
              motiva a tu seguidores
            </h2>
          </div>
          <div className='flex pb-14'>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${getBorderStyle(index)} mt-4 w-[110px] ml-4 flex pl-16`}
              ></div>
            ))}
          </div>
          <div className='w-full flex justify-center items-center'>
            <Link href='/a' > 
              <span className='w-5/6 py-2 px-6 h-[40px] rounded-[8px] bg-Turquesa/600 hover:bg-Turquesa/900 hover:opacity-90 duration-200 ml-4 text-[25px] font-semibold'>
                Comenzar hoy
              </span>
            </Link>
          </div>
        </div>
        <div className='flex justify-center pb-2'>
          <div className={`${getBorderStyle(images.length)} mt-4 w-[105px] ml-4 flex pl-16`}></div>
        </div>
      </article>

      <div
        className='bg-cover w-full h-[748px] min-h-screen flex flex-col justify-between object-cover absolute top-0 opacity-30'
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      ></div>
    </>
  );
};

export default OnboardingPage;
