'use client '
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function CerrarCloseButton({onClose}) {
  return (
    <AiOutlineClose className='text-[24px]' onClick={onClose}/>
  )
}

export default CerrarCloseButton