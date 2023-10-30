import React from 'react'
import MenuBar from '@/components/menuBar/MenuBar'
import StatusBar from '@/components/statusBar/StatusBar'

const CrearEjercicios = () => {
  return (
    
    <main className='w-[412px] bg-black min-h-screen py-4'>

    <StatusBar/>
    <MenuBar/>

    <section className='flex flex-col justify-center'>

        <article className='flex justify-center items-center text-white w-[380px] h-[60px] pl-3 pt-16'>

            <div className='w-[44px] h-[8px] rounded-l-[8px] bg-Turquesa/600'>
            </div>
            
                <div className='rounded-full border-Turquesa/600 border-[1px]
                 bg-Turqusa/20 flex items-center justify-center w-[32px] h-[32px] bg-Turqusa/200'>
                    1
                </div>
                
            <div className='w-[90px] h-[8px] border-Turquesa/600 border-t-[1px] border-b-[1px]'>
            </div>
            
                <div className='rounded-full
                 bg-Turqusa/200 w-[32px] h-[32px] flex items-center justify-center'>
                    2
                </div>
               
            <div className='w-[90px] h-[8px] border-Turquesa/600 border-t-[1px] border-b-[1px]'>
            </div>
            
                <div className='rounded-full 
                w-[32px] h-[32px] flex items-center justify-center bg-Turqusa/200'>
                    3
                </div>
               
            <div className='w-[44px] h-[8px] rounded-r-[8px] border-Turquesa/600
             border-t-[1px] border-b-[1px] border-r-[1px]'>
            </div>

        </article>

        <article className='flex items-center justify-around text-white text[14px] px-5 pt-5'>
            <div className='font-medium'>
                <h3>Rutina</h3>
            </div>
            <div className='font-light'>
                <h3>Ejercicio</h3>
            </div>
            <div className='font-light mr-1'>
                <h3>Contenido</h3>
            </div>
        </article>
    
    <div className='flex justify-center'>
       <article>
        <h3 className='text-[24px] font-normal text-Turquesa/600 py-4'>
            Crea tu primera rutina
            </h3>

            <p className='text-white'>Completá con los datos que tendrá tu rutina. </p>

     
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


<div className='flex justify-center items-end mt-[140px]'>
<div className='border-[2px] border-white w-[105px]'></div>
</div>

        </article>    
    </div>  
    </section>

</main>

  )
}

export default CrearEjercicios