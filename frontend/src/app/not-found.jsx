import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex justify-center items-center min-h-screen border-2'>
<div className='w-full h-full flex flex-col justify-center items-center'>
<p className=''>
        <span className='text-6xl text-Turquesa/600 mr-2'>404</span>
        <span className='text-4xl text-Grises/200 uppercase'>Error</span>

</p>
        <p className='text-Grises/300 text-3xl'>Porfavor vuelva al <Link href={"/a"} className='underline text-Turquesa/500'> inicio </Link></p>

</div>
    </div>
  )
}

export default NotFound