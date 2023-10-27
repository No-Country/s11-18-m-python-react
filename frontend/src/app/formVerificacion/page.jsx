import React from 'react'
import StatusBar from '@/components/statusBar/StatusBar'
import MenuBar from '@/components/menuBar/MenuBar'

const FormVerificacion = () => {
  return (
    
    <main className='w-[412px] h-[1035px] bg-black min-h-screen'>
    <StatusBar/>
    <MenuBar/>

    <div className='px-4'>

    <div>    
    <h2 className='py-[16px] text-[24px] font-medium text-Turquesa/600'>
        Completa con tus datos
        </h2>

        <p className=' text-[18px] text-white font-light'>
        Ingresá tus datos para poder ser aprobado. 
        </p>
    </div>

    <form className='py-[48px]'>
        
        <div className='text-white w-[380px] h-[72px] mb-5'>
            <label htmlFor="Name">Nombre del título/certificación</label>
            <input type="text"
            name='certificacion'
            placeholder='Ingresar datos'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[40px] rounded-[4px] mt-2 pl-3' />
        </div>
        <div className='text-white w-[380px] h-[72px] mb-5'>
            <label htmlFor="Name">Institución académica</label>
            <input type="text"
            name='certificacion'
            placeholder='Ingresar nombre'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[40px] rounded-[4px] mt-2 pl-3' />
        </div>
        <div className='text-white w-[380px] h-[72px]'>
            <label htmlFor="Name">Enlace del título/certificado</label>
            <input type="text"
            name='certificacion'
            placeholder='Ingresar link'
            className='bg-transparent outline-none border-Turquesa/600 border-[1px]
             w-[380px] h-[40px] rounded-[4px] mt-2 pl-3' />
        </div>
    
    </form>
   
    </div>

    <div className='flex justify-center gap-4'>
        <button className='w-[182px] h-[40px] bg-transparent text-Turquesa/600 rounded-[8px]
         border-Turquesa/600 border-[1px] text-[18px]'>
            Cancelar
        </button>
        <button className='w-[182px] h-[40px] bg-Turquesa/900 rounded-[8px]
         text-gray-700 text-[18px'>
            Enviar
        </button>
    </div>

    <div className='flex justify-center items-end mt-44'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

   </main>

  )
}

export default FormVerificacion