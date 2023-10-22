import React from 'react'
import {MdSignalWifiStatusbar4Bar } from "react-icons/md";
import {LuTriangleRight } from "react-icons/lu";
import {GiBattery25} from "react-icons/gi";

const StatusBar = () => {
  return (
    <article className='w-[412px] h-[52px] bg-black flex justify-between items-center px-4'>
    <span className='text-white'>9:30</span>
    <div className='text-white flex'>
        <MdSignalWifiStatusbar4Bar/>
        <LuTriangleRight/>
        <GiBattery25/>
    </div>

</article>

  )
}

export default StatusBar