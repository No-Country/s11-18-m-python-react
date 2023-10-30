
import React from 'react'
import { FiYoutube } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import { ROUTINECONTENT } from './RutinaCon';
import "./routine.css" 


const  RutinesCard =  () => {
  

  return ( 
    <div className=' w-full py-2 '>
      <h2 className="text-Turquesa/600 font-medium text-2xl">Rutinas gratuitas</h2>
      <div className='flex overflow-x-scroll pb-10 hide-scroll-bar gap-2 '>
<div className='flex flex-nowrap '>


      
{    ROUTINECONTENT.map((routine) =>{
  
    return(

      <article className='w-[359px] h-[192px]  mx-2   bg-Turquesa/500 rounded-[8px] relative my-2 p-1' >
          <BsBookmarks className='text-white absolute top-3 right-3 w-[28px] h-[28px]'/>
          <div className='w-[30px] h-[30px] bg-Turquesa/500 text-black
           rounded-[8px] absolute top-3 left-3   flex items-center justify-center' key={routine.type.typeid}>
            {routine.type.src}
              </div>
          <div className='w-full h-[144px] rounded-[8px]   flex justify-center items-center '>
              <img src={routine.img}  className='rounded-[8px]  w-full h-full    ' alt={routine.title} />
          </div>
          <div className='flex items-center justify-between gap-3 px-3 pt-3'>
        <Link key={routine.RoutineID} href={`/a/${routine.RoutineID}`}>
              <h3 className='font-semibold'>
                  {routine.title}
              </h3>
      </Link>
              <div className='flex items-center'>
              <FiYoutube className='w-[44px] h-[24px]'/><span>{routine.number}</span>
              </div>
          </div>
      </article>
  
    )
  })}

</div>
    </div>
    </div>
)}

export default RutinesCard

// <!-- component -->
// <div class="flex flex-col bg-white m-auto p-auto">
// <h1
//         class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
//       >
//         Example
//       </h1>
//       <div
//         class="flex overflow-x-scroll pb-10 hide-scroll-bar"
//       >
//         <div
//           class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
//         >
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//           <div class="inline-block px-3">
//             <div
//               class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
//             ></div>
//           </div>
//         </div>
//       </div>
// </div>
// <style>
// .hide-scroll-bar {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// .hide-scroll-bar::-webkit-scrollbar {
//   display: none;
// }
// </style>