import React from 'react'

const FollowsComponent = () => {
  return (
    <article className='w-[192px] h-[50px] bg-black flex
    items-end text-white justify-between px-2 font-medium'>

        <div className>
            <span className='text-[18px] pl-6'>10</span>
            <h2 className='text-[16px]'>Seguidores</h2>
        </div>

        <div>
            <span className='text-[18px] pl-5'>35</span>
            <h2 className='text-[16px]'>Seguidos</h2>
        </div>

    </article>
  )
}

export default FollowsComponent