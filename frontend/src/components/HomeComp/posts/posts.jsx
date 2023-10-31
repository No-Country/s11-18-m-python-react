import PublicacionTexto from '@/components/crearPost/PublicacionTexto'
import RutinaGenerico from '@/components/crearPost/RutinaGenerico'
import RutinaPaga from '@/components/crearPost/RutinaPaga'
import React from 'react'

function PostComp() {
  return (
      <>
 <div className='flex justify-center items-center my-4'>
      <PublicacionTexto/>

 </div>
 <div className='flex justify-center items-center my-4'>
<RutinaGenerico/>

 </div>
 <div className='flex justify-center items-center my-4'>
<RutinaPaga/>

 </div>
    
   </>
  )
}

export default PostComp