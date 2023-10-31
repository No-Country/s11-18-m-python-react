import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function CloseButton({ButtonClose}) {
  return (
    <>
     <AiOutlineClose className='text-white text-2xl absolute right-4 top-4 cursor-pointer' onClick={ButtonClose}/>
    </>
  )
}

export default CloseButton