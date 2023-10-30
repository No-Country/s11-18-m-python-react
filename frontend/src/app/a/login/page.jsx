import React from 'react'

const LoginPage = () => {
  return (
    
    <article className='w-[412px] h-[748px] min-h-screen flex flex-col justify-center
    bg-[url("https://images.pexels.com/photos/16966365/pexels-photo-16966365/free-photo-of-blanco-y-negro-hombres-deporte-en-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]
     object-contain'>
    
      <div className='pt-[340px]'>
      <div className='pl-5 pb-6 text-center'>
      <h2 className='text-white text-[36px]'>
        Sumate hoy a
      </h2>
      <h1 className='text-Turquesa/600 font-semibold text-[36px] pb-4'>
        GymMate
      </h1>
      </div>
     
      <button className='w-[380px] h-[40px] rounded-[8px] bg-Turquesa/600 ml-4 text-[25px] font-semibold my-4'>
        Comenzar hoy
      </button>
        </div>
        <div className='text-center pt-4'>
            <p className='text-white text-[22px]'>
                ¿No tenés cuenta?
                </p>
            <button className='text-Turquesa/600 text-[22px] font-semibold'>
                Registrate
                </button>
                <span ></span>
        </div>
        <div className='flex justify-center'>
      <div className='border-[2px] border-white mt-44 w-[105px] ml-4 flex pl-16'></div>
      </div>
    </article>

  )
}

export default LoginPage