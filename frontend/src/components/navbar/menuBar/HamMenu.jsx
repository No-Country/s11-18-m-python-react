'use client'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

function HamMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  

  return (
    <div className='relative'>
     <AiOutlineMenu onClick={toggleOpen} />
    { isOpen ?  
    
<HamburgerMenu toggleOpen={toggleOpen} />
    
    : 
    
   ""
    
    }

    </div>

  )
}

export default HamMenu
