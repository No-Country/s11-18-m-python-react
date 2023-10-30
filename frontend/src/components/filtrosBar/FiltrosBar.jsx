import React from 'react'
import { BsSliders } from "react-icons/bs";

const FiltrosBar = () => {
  return (
    <article className='bg-black rounded-[8px] w-[182px] h-[40px] flex
    border-Turquesa/600 border-[1px] text-white px-3 items-center justify-start gap-3'>
        <button>
            <BsSliders/>
        </button>
        <h1>
            Filtros
        </h1>
    </article>
  )
}

export default FiltrosBar