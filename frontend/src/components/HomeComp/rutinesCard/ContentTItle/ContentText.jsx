'use client'
import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineYoutube } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

const ContentTextRutine = [
  {
    id: 1,
    type: "content-text",
    title: "Acerca de la Rutina",
    description: "Rutina de entrenamiento diseñada para potenciar la fuerza y resistencia de tu cuerpo. Centrada en movimientos que involucran varios...",
    more: "leer más..."
  },
  {
    id: 2,
    type: "content-text",
    title: "Valoraciones",
    description: "Rutina de entrenamiento diseñada para potenciar la fuerza y resistencia de tu cuerpo. Centrada en movimientos que involucran varios...",
    more: "Ver Mas..."
  },
  {
    id: 3,
    type: "content-text",
    title: "Informacion de rutina",
    description: "Rutina de entrenamiento diseñada para potenciar la fuerza y resistencia de tu cuerpo. Centrada en movimientos que involucran varios...",
    more: "leer más..."
  },
  {
    id: 4,
    type: "content-video",
    title: "Contenido de Video",
    description: "11 videos",
    icon:  <AiOutlineYoutube className='mr-2 text-3xl'/>,
    iconText: "Reproducir todos"
  },
];
const VideoContentAhi = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: `Fuerza de brazo #1`,
        time: "07:30"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: `Fuerza de brazo #2`,
        time: "12:30"
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: `Fuerza de brazo #3`,
        time: "04:14"
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: `Fuerza de brazo #4`,
        time: "14:00"
    },
]

const FaqRutineCont = ({ title, content, more }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col border-dark rounded-xl transition-all duration-500">
      <div
        className="flex justify-between px-6 items-center h-[46px] cursor-pointer hover:bg-gray transition-colors rounded-xl"
        onClick={toggleOpen}
      >
        <h3 className="text-orange text-left lg:text-xl md:text-base">{title}</h3>
        {isOpen ? (
          <AiOutlineArrowDown className="fill-orange md:w-6 md:h-6 transition-all ease-in duration-300" />
        ) : (
          <AiOutlineArrowRight className="fill-orange md:w-6 md:h-6 transition-all ease-out duration-500" />
        )}
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-6 py-4 flex-wrap flex justify-start text-left transition-all duration-300 md:text-base text-xs`}
      >
        <p className={`${isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'} transition-opacity duration-300`}>
          {content} 
        </p>
        <span className="text-Turquesa/700 underline text-center first-letter:uppercase w-full mt-4">{more}</span>
      </div>
    </div>
  );
};

const VideoFaqRutineCont = ({ title, description, icon, iconText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex-col border-dark rounded-xl hidden transition-all duration-500">
      <div
        className="flex justify-between px-6 items-center h-[46px] cursor-pointer hover:bg-gray transition-colors rounded-xl"
        onClick={toggleOpen}
      >
        <h3 className="text-orange text-left lg:text-xl md:text-base">{title}</h3>
        {isOpen ? (
          <AiOutlineArrowDown className="fill-orange md:w-6 md:h-6 transition-all ease-in duration-300" />
        ) : (
          <AiOutlineArrowRight className="fill-orange md:w-6 md:h-6 transition-all ease-out duration-500" />
        )}
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-6 py-4  w-full  transition-all duration-300 md:text-base text-xs`}
      >
        <div className={`${isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'} transition-opacity duration-300`}>
          <div className='w-full flex justify-between items-center px-1 text-[0.9rem]'>
            <p>
              {description}
            </p>
            <p className='flex items-center text-Turquesa/600 underline '>
              {icon} {""} {iconText}
            </p>
          </div>
          <div className="grid grid-rows-4 gap-2">
            {
              VideoContentAhi.map((VideoCont) => {
                return (
                  <article key={VideoCont.id} className='flex justify-evenly items-start'>
                    <div className={` w-40 h-fit my-4 border-Turquesa/600 border-2 rounded-2xl`}>
                      <img src={VideoCont.src} className='w-fit h-fit rounded-2xl' alt={VideoCont.title} />
                    </div>
                    <div className='my-4 px-2'>
                      <h3 className='text-sm font-medium'>{VideoCont.title}</h3>
                      <span className='text-sm font-medium text-Grises/300 pt-10 opacity-60'>{VideoCont.time}</span>
                    </div>
                  </article>
                );
              })
            }
          </div>
          <div className='w-full flex justify-center items-center'>
            <span className=' py-2 px-2 w-1/2 flex justify-evenly items-center text-Turquesa/600 text-lg'>
              <BsPlus className='border-2 rounded-full text-2xl border-Turquesa/600'/> Más videos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function ContentText({ descriptionaAPI, comment, sets }) {
  return (
    <section className="grid grid-flow-row ">
      {ContentTextRutine.map((routine) => (
        <article key={routine.id} className="border-t-[1px] border-Grises/200 text-white my-5">
          {routine.type === "content-video" ? (
            <VideoFaqRutineCont key={routine.id}  {...routine} />
          ) : routine.type === "content-text" && routine.title === "Informacion de rutina" ? (
            <FaqRutineCont key={routine.id} more={routine.more} content={sets} title={routine.title} />
          ) : routine.type === "content-text" && routine.title === "Valoraciones" ? (
            <FaqRutineCont key={routine.id} more={routine.more} content={comment} title={routine.title} />
          ) : (
            <FaqRutineCont key={routine.id} more={routine.more} content={descriptionaAPI} title={routine.title} />
          )}
        </article>
      ))}
    </section>
  );
}

export default ContentText;