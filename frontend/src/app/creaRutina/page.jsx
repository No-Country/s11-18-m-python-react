import MenuBar from '@/components/menuBar/MenuBar'
import StatusBar from '@/components/statusBar/StatusBar'
import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import { RxSwitch } from "react-icons/rx";

const CreaRutina = () => {
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

                <form className='py-[48px] w-[380px]'>
        
        <div className='text-white w-[380px] h-[72px] mb-5'>
            <label htmlFor="Name">Nombre de la rutina</label>
            <input type="text"
            name='rutina'
            placeholder='Ingresa nombre'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[32px] rounded-[4px] mt-2 pl-3' />
        </div>
        <div className='text-white w-[380px] h-[72px] mb-5'>
            <label htmlFor="Name">Descripción</label>
            <input type="text"
            name='descripcion'
            placeholder='Agrega descripción'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[128px] rounded-[4px] mt-2 pl-3' />
        </div>
    </form>

    <h3 className='text-white pt-14'>
        Dificultad
    </h3>
    <div className='w-[380px] h-[40px] border-Turquesa/600 border-[1px] rounded-[8px]
    flex justify-between items-center text-white px-3 my-3'>
        <h4>
            Seleccionar dificultad
        </h4>
        <BsChevronDown className='text-white'/>
    </div>

     <h3 className='text-white py-5'>
        Tipo
        </h3>   

        <div className='flex items-center justify-between text-white'>
            <button className='w-[182px] h-[64px] border-Turquesa/600 border-[1px] rounded-[8px]
            items-center justify-center flex gap-4'>
                <h4 className='rounded-full border-white border-[1px] w-10 h-6 mt-[2px]'>Free</h4>
                <h4 className='text-[18px]'>Rutina gratis</h4>
            </button>
           
    
            <button className='w-[182px] h-[64px] border-Turquesa/600 border-[1px] rounded-[8px]
            items-center justify-center flex gap-4'>
                <h4 className='rounded-full border-white border-[1px] w-6 h-6 mt-[2px]'>$</h4>
                <h4 className='text-[18px]'>Rutina paga</h4>
            </button>
        </div>
        
        <div className='text-white w-[380px] h-[72px] mb-5 flex flex-col mt-8'>
            <label htmlFor="Name">Precio</label>
            <input type="text"
            name='rutina'
            placeholder='Ingresar monto'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[182px] h-[36px] rounded-[4px] mt-2 pl-3' />
        </div>

        <div className='flex justify-between py-5'>
            <div>
                <h3 className='text-[16px] text-white font-medium'>Usuarios premium podrán ver gratis
                    <br />
                     mi rutina.
                     </h3>
                     <h4 className='text-[14px] text-white font-light mt-2'>
                        Podrás desactivarlo cuando desees.
                     </h4>
            </div>
            <div className='text-[50px] text-zinc-600'>
                <RxSwitch/>
            </div>
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
    

    <div className='flex justify-center items-end mt-[140px]'>
    <div className='border-[2px] border-white w-[105px]'></div>
    </div>

            </article>    
        </div>  
        </section>

    </main>
  )
}

export default CreaRutina