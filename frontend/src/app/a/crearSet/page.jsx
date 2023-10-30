import React from 'react'

const CrearSet = () => {
  return (

    <main className='w-[412px] bg-black min-h-screen py-4'>


    <section className='flex flex-col justify-center'>

        <article className='flex justify-center items-center text-white w-[380px] h-[60px] pl-3 pt-16'>

            <div className='w-[44px] h-[8px] rounded-l-[8px] bg-Turquesa/600'>
            </div>
            
                <div className='rounded-full 
                  flex items-center justify-center w-[32px] h-[32px] bg-Turqusa/200'>
                    1
                </div>
                
            <div className='w-[90px] h-[8px] bg-Turquesa/600 border-t-[1px] border-b-[1px]'>
            </div>
            
                <div className='rounded-full
                 bg-Turqusa/200 w-[32px] h-[32px] flex items-center justify-center
                 border-Turquesa/600 border-[1px]'>
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
        <h3 className='text-[24px] font-normal text-Turquesa/600 py-7'>
            Información de ejercicio
            </h3>

            <p className='text-white'>
            Completa la información a continuación para
            <br />
             crear un set con sus respectivos días y
             <br />
              ejercicios.
            </p>

            <h2 className='text-white text-[18px] font-medium pt-8'>Se repite los días...</h2>

            <div className='flex items-center text-white justify-around py-6'>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>D</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>L</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>M</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>X</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>J</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>V</div>
                <div className='w-[32px] h-[32px] rounded-full border-Turquesa/600 border-[1px] flex items-center justify-center'>S</div>
            </div>

            <div className='text-white w-[380px] h-[72px] mb-5 mt-3'>
            <label htmlFor="Name">Nombre del ejercicio</label>
            <input type="text"
            name='rutina'
            placeholder='Ingresa nombre'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[32px] rounded-[4px] mt-2 pl-3' />
        </div>

        <div className='text-white w-[182px] h-[72px] mb-5 mt-7'>
            <label htmlFor="Name">Repeticiones</label>
            <input type="text"
            name='repeticiones'
            placeholder='Ingresar cantidad'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[182px] h-[32px] rounded-[4px] mt-2 pl-3' />
        </div>

        <div className='text-white w-[182px] h-[72px] mb-5 mt-7'>
            <label htmlFor="Name">Peso kg</label>
            <input type="text"
            name='rutina'
            placeholder='Ingresar cantidad'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[182px] h-[32px] rounded-[4px] mt-2 pl-3' />
        </div>

        <div className='text-white w-[182px] h-[72px] mb-5 mt-7'>
            <label htmlFor="Name">Descansos</label>
            <input type="text"
            name='rutina'
            placeholder='Ingresar cantidad'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[182px] h-[32px] rounded-[4px] mt-2 pl-3' />
        </div>

        <div className='text-white w-[380px] h-[72px] mb-28'>
            <label htmlFor="Name">Descripción</label>
            <input type="text"
            name='descripcion'
            placeholder='Agrega descripción'
            className='bg-transparent outline-none border-Turquesa/600
             border-[1px] w-[380px] h-[128px] rounded-[4px] mt-2 pl-3' />
        </div>
   

     
    <div className='flex justify-center gap-4 pt-[62px]'>
    <button className='w-[182px] h-[40px] bg-transparent text-Turquesa/600 rounded-[8px] font-normal
     border-Turquesa/600 border-[1px] text-[18px]'>
        Volver
    </button>
    <button className='w-[182px] h-[40px] bg-Turquesa/900 rounded-[8px] font-normal
     text-gray-700 text-[18px'>
        Siguiente
    </button>
</div>


<div className='flex justify-center items-end mt-[610px]'>
<div className='border-[2px] border-white w-[105px]'></div>
</div>

        </article>    
    </div>  
    </section>

</main>

  )
}

export default CrearSet