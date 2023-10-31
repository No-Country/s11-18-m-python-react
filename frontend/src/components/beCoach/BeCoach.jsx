import React from 'react'

const BeCoach = () => {
  return (

    <>
   
    <article className='w-[full] h-[240px] pl-6 object-cover bg-cover
    bg-[url("/images/becoach.png")]'>
      

        <h2 className='text-Turquesa/600 text-[28px] font-medium pt-5'>
            Convertite en coach
        </h2>

        <p className='text-white text-[20px] font-light py-3'>
        Verifica tu experiencia y ayuda a
        <br />
         otros a alcanzar sus metas como
         <br />
          profesional.
        </p>

        <button className='w-[185px] h-[40px] bg-Turquesa/700 text-black rounded-[8px]
        text-[18px] font-medium'>
            Verificar perfil
        </button>

    </article>
    </>
  )
}

export default BeCoach