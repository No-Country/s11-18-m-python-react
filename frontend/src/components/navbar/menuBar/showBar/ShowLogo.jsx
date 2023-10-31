'use client'
import Link from 'next/link'
import React from 'react'

function ShowLogo({ showLogo, text }) {
  return (
    <>
      {showLogo ? (
        <Link href='/a' className='rounded-full'>
          <div className='bg-black w-[48px] h-[48px] rounded-full flex justify-center items-center'>
            <h1 className='text-white'>Logo</h1>
          </div>
        </Link>
      ) : (
        <div className='bg-black w-[48px] h-[48px] rounded-full flex justify-center items-center'>
          <h1 className='text-white'>{text}</h1>
        </div>
      )}

    </>
  )
}

export default ShowLogo