"use client"
import React, { useState } from 'react'
import { TbPremiumRights } from 'react-icons/tb'

function ButtonDetalles({is_paid}) {
 const [free, setFree] = useState(is_paid)


  return (
    <>
     { free ?  <button className='px-4 py-2 mx-1 rounded-lg flex justify-center items-center bg-Turquesa/700 text-black'> 
    <TbPremiumRights className='text-xl w-fit h-8 mr-2 '/>
    <span className='first-letter:uppercase font-medium'>comprar rutina</span>
  </button> : ""
    
    
    }
   
    </>
   
  )
}

export default ButtonDetalles