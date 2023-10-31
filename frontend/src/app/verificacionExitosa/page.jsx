import React from 'react'
import StatusBar from '@/components/statusBar/StatusBar'
import MenuBar from '@/components/menuBar/MenuBar'

const VerificacionExitosa = () => {
  return (
    
    <main className='w-[412px] h-[1035px] bg-black min-h-screen'>
    <StatusBar/>
    <MenuBar/>

    <div className='px-4'>

    <h2 className='pt-[32px] text-[24px] font-medium text-Turquesa/600'>
        Confirmación de verificación
        </h2>

      <div className='flex justify-center py-[48px]'>
        <div className='rounded-full w-[168px] h-[168px]'>
        <img className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
         src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar image" />
    </div>
    </div>

    <div>    
    <p className='py-[16px] text-[18px] font-light text-white'>
    Tu perfil fue <span className='text-Turquesa/600'>verificado correctamente.</span>
    <br />
    Podrás disfrutar todos los beneficios de ser un
    <br />
    coach en <span className='text-Turquesa/600'>GymMate.</span>
        </p>

        <p className=' text-[18px] text-Turquesa/600 font-medium'>
        ¡Que tu experiencia brille en cada rutina que
        <br />
         compartas! 
        </p>
    </div>

    <div className='flex justify-center gap-4 pt-[56px]'>
        <button className='w-[182px] h-[40px] bg-transparent text-Turquesa/600 rounded-[8px] font-normal
         border-Turquesa/600 border-[1px] text-[18px]'>
            Salir
        </button>
        <button className='w-[182px] h-[40px] bg-Turquesa/900 rounded-[8px] font-normal
         text-gray-700 text-[18px'>
            Comenzar
        </button>
    </div>
    
    </div>

    <div className='flex justify-center items-end mt-[340px]'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

   </main>

  )
}

export default VerificacionExitosa