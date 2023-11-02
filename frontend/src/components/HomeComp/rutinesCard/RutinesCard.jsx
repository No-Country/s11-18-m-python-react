
import React from 'react'

import "./routine.css" 
import RoutineComponent from './Api/ApiRutine';


const  RutinesCard = async  ({title}) => {
 


  return ( 
    <div className=' w-full py-2 '>
      <h2 className="text-Turquesa/600 font-medium text-2xl pl-2">Rutinas </h2>
      <div className='flex overflow-x-scroll pb-10 hide-scroll-bar gap-2 '>
<div className='flex flex-nowrap '>


<RoutineComponent/>

</div>
    </div>
    </div>
)}

export default RutinesCard

