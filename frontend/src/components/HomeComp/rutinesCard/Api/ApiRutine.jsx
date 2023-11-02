'use client'
import React, { useState, useEffect } from 'react';
import { BsBookmarks } from 'react-icons/bs';
import { FiYoutube } from 'react-icons/fi';
import Link from 'next/link';
import FreeIcon from '@/components/icons/FreeIcon';
import { TbPremiumRights } from 'react-icons/tb';

const RoutineComponent = ({Datos}) => {
  const [routines, setRoutines] = useState([]);

  const IconsUser = {
    false: <FreeIcon />,
    true: <TbPremiumRights className='w-full text-2xl h-full flex justify-center items-center' />,
  };

  const ImagesUser = {
    2: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    1: "https://images.pexels.com/photos/6303730/pexels-photo-6303730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    3: "https://images.pexels.com/photos/3490363/pexels-photo-3490363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    4: "https://images.pexels.com/photos/6303730/pexels-photo-6303730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    5: "https://images.pexels.com/photos/6303730/pexels-photo-6303730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const exportData = () => {
    const exportedData = JSON.stringify(routines);
    const blob = new Blob([exportedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'routines.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await fetch('http://ec2-3-101-14-170.us-west-1.compute.amazonaws.com/routine/routine/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const routinesData = await response.json();
        setRoutines(routinesData);

        // Exportar automáticamente después de cargar los datos
        exportData();
      } catch (error) {
        console.error('Error fetching routines:', error);
      }
    };

    fetchRoutines();
  }, []); // El segundo parámetro de useEffect es un array de dependencias, dejarlo vacío ejecuta el efecto solo una vez


  return (
    <div className="flex flex-unwrap">
      {routines.map((routine) => (
        <article key={routine.id} className="w-[359px] h-[200px] mx-2 bg-Turquesa/500 rounded-[8px] relative my-2 p-1">
          <BsBookmarks className="text-white absolute top-3 right-3 w-[28px] h-[28px]" />
          <div className="w-[30px] h-[30px] bg-Turquesa/500 text-black rounded-[8px] absolute top-3 left-3 flex items-center justify-center">
            {/* Replace this with your actual icon or content */}
            {IconsUser[routine.is_paid]}
          </div>
          <div className="w-full h-[144px] rounded-[8px] flex justify-center items-center">
            <img src={ImagesUser[routine.id]} className="rounded-[8px] w-full h-full object-cover" alt={routine.title} />
          </div>
          <div className='h-fit w-full flex justify-center items-center   '>

          <div className="flex items-center justify-evenly w-full   ">
            <Link href={`/a/rutinas/${routine.id}`}>
              <h3 className="font-semibold w-full text-left  flex justify-center  items-center ">{routine.title}</h3>
            </Link>
            <div className="flex items-center -2 ">
              <FiYoutube className="w-[44px] h-[36px] mr-2" />
              <span>{routine.reating}</span>
            </div>
          </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default RoutineComponent;
