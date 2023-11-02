'use client'
import React, { useState } from 'react';
import SearchContainer from '@/components/HomeComp/searchcontainer/SearchContainer';
import Avatar from '@/components/avatar/Avatar';
import BannerMancuernas from '@/components/bannerMancuernas/BannerMancuernas';
import PostComponent from '@/components/crearPost/ApiPost/ApiPost';
import EditarButton from '@/components/editarButton/EditarButton';
import FollowsComponent from '@/components/followsComponent/FollowsComponent';

const ConsigueSeguidor = () => {
  const [activeTab, setActiveTab] = useState('post'); // Default to 'post'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className='bg-black min-h-screen relative flex flex-col justify-start items-center'>
      {/* Banner Section */}
      <div className=' relative'>
        <BannerMancuernas />
        <h2 className='text-white py-4 pl-3 text-[24px]'>Manuel Hoffmann</h2>

        <div className='pl-3'>
          <FollowsComponent />
        </div>

        <p className='text-white py-4 pl-3 font-light text-[16px]'>
          Apasionado por el fitness y la vida activa. <br />
          Compartiendo mi viaje hacía mi mejor versión 🏋🏼‍♀️ ️‍
        </p>
        <div className='absolute top-12 right-5'>
          <Avatar />
        </div>
      </div>

      {/* Navigation Section */}
      <article className='w-[281px] h-[32px] bg-black text-white flex justify-around items-center'>
        <div className={activeTab === 'post' ? 'border-b-Turquesa/600 border-b-2' : ''} onClick={() => handleTabClick('post')}>
          <h3>Post</h3>
        </div>
        <div className={activeTab === 'info' ? 'border-b-Turquesa/600 border-b-2' : ''} onClick={() => handleTabClick('info')}>
          <h3>Info</h3>
        </div>
        <div className={activeTab === 'ajustes' ? 'border-b-Turquesa/600 border-b-2' : ''} onClick={() => handleTabClick('ajustes')}>
          <h3>Ajustes</h3>
        </div>
      </article>

      {/* Content Section */}
      <div className='p-2 flex gap-9 flex-col'>

        {/* Render content based on the active tab */}
        {activeTab === 'post' && (
          <>
            <SearchContainer />
            <PostComponent />
          </>
        )}

        {activeTab === 'info' && (
              <div className='text-white py-4 pl-3 font-light text-[16px] bg-Grises/100 rounded-2xl shadow-md px-2'>
              <p>
                ¡Hola! Soy Manuel Hoffmann, un apasionado joven de 22 años que disfruta explorando el mundo del fitness y llevando una vida activa. Mi viaje hacia mi mejor versión incluye desafíos, aprendizajes y logros en el ámbito del bienestar personal.
              </p>
              <p>
                Además de mis entrenamientos, me encanta compartir experiencias y conocimientos sobre cómo mantener un estilo de vida saludable. Siempre estoy abierto a nuevas amistades y a construir una comunidad que comparta el mismo entusiasmo por el bienestar físico y mental.
              </p>
              <p>
                Fuera del gimnasio, me encontrarás explorando nuevas actividades, disfrutando de la naturaleza o sumergiéndome en lecturas inspiradoras. ¡Acompáñame en este viaje hacia la mejor versión de nosotros mismos!
              </p>
            </div>
        )}

        {activeTab === 'ajustes' && (
          <div className='text-white w-full flex justify-center items-center flex-col'>
        <EditarButton  />

            <div className=' flex justify-evenly w-full my-5 text-Turquesa/300 underline'>
              <span>Cancelar subscripcion</span>
              <span>Cambiar de cuenta </span>
            </div>
          <button className='py-2 px-4  text-black bg-Turquesa/500 rounded-xl'> Cerrar sesion</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default ConsigueSeguidor;
