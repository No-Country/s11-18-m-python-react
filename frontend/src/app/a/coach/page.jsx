import Avatar from '@/components/avatar/Avatar'

import { PiArrowFatRightLight } from "react-icons/pi";
import { AiOutlineCheck} from "react-icons/ai";
import React from 'react'
import Link from 'next/link';


const Coach = () => {
  return (
   <main className=' w-full h-full bg-black min-h-screen flex flex-col justify-center'>
 

    <div className='px-4'>

    <div>    
    <h2 className='py-[16px] text-[24px] font-medium text-Turquesa/600'>
        Verificación de perfil
        </h2>

        <p className='py-8 text-[18px] text-white font-light'>
        Validá tu experiencia completando los datos,
        <br />
         serás notificado una vez que seas aceptado.
        </p>
    </div>

    <div className='flex justify-center items-center gap-6 py-4 '>
    <Avatar/>
    <PiArrowFatRightLight className="text-Turquesa/600 w-[52px] h-[36px]"/>
    <div className='rounded-full w-[80px] h-[80px]'>
        <img className='w-full h-full object-cover rounded-full border-Turquesa/300 border-[1px]' src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
    </div>
    </div>

    <div>
    <p className='py-8 text-[18px] text-white font-light '>
    Una vez que tu perfil sea verificado tu avatar 
        <br />
         será distinguido como el de un coach.
        </p>
    </div>  

    <button className='w-full h-[40px] text-black rounded-[8px]
     my-8 bg-Turquesa/700 flex items-center justify-center gap-[10px] text-[18px]' >
       <Link href={"/a/coach"} className='flex  justify-center items-center w-full'>
        <span><AiOutlineCheck className='mr-3'/></span>Verificar perfil
       
       </Link>
    </button>

    </div>
    
    <div className='flex justify-center items-end mt-[340px]'>
    <div className='border-[2px] border-white w-[105px] mb-2 rounded-xl'></div>
    </div>

   </main>
  )
}

export default Coach