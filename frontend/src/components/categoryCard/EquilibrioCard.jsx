import React from 'react'

const EquilibrioCard = () => {
  return (
    <article className='w-[380px] h-[208px] rounded-[8px] 
     border-Turquesa/700 border-[1px] relative'>
        <img className='object-cover rounded-[8px]' src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="equilibrio" />
        <div className='w-[380px] h-[51px] bg-Turquesa/600 absolute top-28'>
            <h1 className='text-[24px] font-semibold text-center pt-1'>
                Equilibrio
            </h1>
        </div>
    </article>
  )
}

export default EquilibrioCard