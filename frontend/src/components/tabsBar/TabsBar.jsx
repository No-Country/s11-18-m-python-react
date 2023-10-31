import React from 'react'

const TabsBar = () => {
  return (
    <article className='w-[281px] h-[32px] bg-black text-white flex justify-around items-center'>
        <div>
            <h1>Free</h1>
        </div>
        <div>
            <h1>Pagas</h1>
        </div>
        <div className='border-b-Turquesa/600 border-b-2'>
            <h1>Premiun</h1>
        </div>

    </article>
  )
}

export default TabsBar