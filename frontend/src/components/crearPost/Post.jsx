import React from 'react';
import { BsThreeDotsVertical, BsBookmark } from 'react-icons/bs';
import { BiSolidHeartCircle, BiComment } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { PiShareFatDuotone } from 'react-icons/pi';
import Image from 'next/image';

const  Post = ({ author, timestamp, content, imageSrc, likes, comments, shares }) => {
  return (
    <article className='w-[380px] bg-zinc-800 rounded-[8px] text-white my-2'>
      <div className='flex justify-between px-3 py-5'>
        <div className='flex gap-3'>
          <div className='rounded-full w-[56px] h-[56px]'>
            <img
              className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
              src={author.avatar}
              alt='avatar image'
            />
          </div>
          <div>
            <h2 className='text-[18px]'>{author.name}</h2>
            <p className='text-[10px]'>{timestamp}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {author.isCoach && (
            <button className='w-[83px] h-[32px] text-black font-semibold bg-Turquesa/500 rounded-[8px]'>
              Comprar
            </button>
          )}
          <BsThreeDotsVertical className='text-3xl' />
        </div>
      </div>

      <div className='pl-5 pb-4 text-[14px] leading-[20px]'>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {imageSrc && (
        <div className='w-[380px] h-[184px] pb-2'>
          <Image width={380} height={184} src={imageSrc} alt='img rutina' />
        </div>
      )}

      <div className='flex text-xl items-center justify-between px-5 pb-1'>
        <div className='flex text-xl'>
          <AiOutlineLike className=' text-blue-800' />
          <BiSolidHeartCircle className='text-red-600' />
        </div>
        {author.isCoach && (
          <div className='flex gap-2 text-xl'>
            <MdOutlineOndemandVideo className='mt-1' />
            <span>{author.videoCount}</span>
          </div>
        )}
      </div>

      <div className='border-[1px] border-zinc-500 w-[345px] ml-4'></div>

      <div className='flex justify-end pr-3 pt-2 gap-4 text-xl'>
        <AiOutlineLike />
        <BiComment />
        <PiShareFatDuotone />
        <BsBookmark />
      </div>
    </article>
  );
};

const RutinaGenerico = () => {
  return (
    <Post
      author={{ name: 'Jimena Castro', avatar: 'URL_AVATAR', isCoach: false }}
      timestamp='Publicado hace 9 hs.'
      content={['Tener buenos resultados es cuestión de esfuerzos.', 'Disfruta lo que haces y pronto verás que valió la pena perseverar.']}
      imageSrc='/images/publicaciongenerico.png'
    />
  );
};

const PublicacionTexto = () => {
  return (
    <Post
      author={{ name: 'Inés Gómez', avatar: 'URL_AVATAR', isCoach: false }}
      timestamp='Publicado ayer'
      content={['Que felicidad poder aprovechar este solcito para', 'realizar ejercicios al aire libre 😁 😁']}
    />
  );
};

const RutinaPaga = () => {
  return (
    <Post
      author={{ name: 'Pedro Valanta', avatar: 'URL_AVATAR', isCoach: true, videoCount: 6 }}
      timestamp='Publicado hace 4 hs.'
      content={['💥 Brazos de Acero: rutina para Ganar Fuerza 💥', '¿Listo para un entrenamiento enfocado en tus brazos?', 'Esta rutina te llevará al siguiente nivel.']}
      imageSrc='/images/publicacioncoach.png'
    />
  );
};

export { RutinaGenerico, PublicacionTexto, RutinaPaga };
export default Post
