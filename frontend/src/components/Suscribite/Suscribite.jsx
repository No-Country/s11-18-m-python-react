import React from 'react'
import CardMenAn from './cards/CardsMenAn'

function Suscribite() {
  return (
    <div className='  bg-Turqusa/100 w-fit  h-fit px-2 py-4'>
        <h3 className='text-2xl text-Turquesa/600 font-semibold'>Suscribete</h3>
        <span className='text-xl text-Blanco'>Disfruta los beneficios de ser premium</span>
        <div className='grid grid-cols-2 gap-2 w-[90vh] mt-5  '> 
        <CardMenAn/>

        </div>
    </div>
  )
}

export default Suscribite