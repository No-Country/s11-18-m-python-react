// 'use client'
import ContentText from '@/components/HomeComp/rutinesCard/ContentTItle/ContentText'
import Image from 'next/image'
import React from 'react'
import { BsBookmarks, BsShare, BsStar } from 'react-icons/bs'
import { PiShareFatBold } from 'react-icons/pi'
import { TbPremiumRights } from 'react-icons/tb'
// import { useRouter } from 'next/navigation'
// import { ROUTINECONTENT } from '@/components/HomeComp/rutinesCard/RutinaCon'

function RutinePage() {
  //   const router = useRouter()
  //   const {RoutineID} = router.query;

  // // if(  ){
  // //   return <div>Cargando...</div>
  // // }

  //   const rutina = ROUTINECONTENT.filter((rutina) => {
  //       return rutina.RoutineID == Number(RoutineID);
  //   })[0];

  return (
    <div className='p-4'>
        <section className='h-fit w-full ' >
          <div className='  rounded-lg h-[240px] bg-cover bg-[url("https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] relative'>
        <span className='text-dark flex justify-evenlly bg-Turquesa/600 items-center px-2 py-1  w-fit rounded-xl absolute bottom-2 left-2'> <BsStar className='mr-1 '/> 4.7</span>
        <span className=' bg-cover bg-[url("https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]  rounded-full w-2 h-4 absolute bottom-[-28px] border-2 border-black right-6 p-6'></span>

          </div>
<div className='my-4'>
          <h2 className='text-white font-medium text-2xl'>Fuerza en movimiento</h2>
            <span className='text-Grises/300 text-lg ' >Por Federico López</span>
  
</div>
<div className='mt-3 flex items-center justify-evenly '>
  <button className='px-4 py-2 mx-1 rounded-lg flex justify-center items-center bg-Turquesa/700 text-black'> 
    <TbPremiumRights className='text-xl w-fit h-8 mr-2 '/>
    <span className='first-letter:uppercase font-medium'>comprar rutina</span>
  </button>
  <span className='border-2 border-Turquesa/600 rounded-md w-1/5 px-4 py-2 mx-1 flex justify-center items-center '>
    <BsBookmarks className='text-xl w-5 h-7  text-white ' /> 
   </span> 
   <span className='border-2 border-Turquesa/600 rounded-md w-1/5 px-4 py-2 mx-1 flex justify-center items-center '>
    <PiShareFatBold className='text-xl w-5 h-7  text-white ' /> 
   </span> 
</div>
        </section>
    <ContentText/>
      
    </div>
  )
}

export default RutinePage