import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import CloseButton from './CloseButton';
import Link from 'next/link';

const HamburgerMenu = ({ toggleOpen }) => {
  const [closeView, setCloseView] = useState(true);
  const menuRef = useRef(null);

  const handleClose = () => {
    setCloseView(!closeView);
    toggleOpen(true);
  };

  const handleOutsideClick = (e) => {
    // If the click is not on the close button and not on a link inside the menu, close the modal
    if (
      !menuRef.current.contains(e.target) &&
      e.target.tagName !== 'A' &&
      !e.target.closest('a')
    ) {
      setCloseView(true);
      toggleOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <article
      ref={menuRef}
      className={
        closeView
          ? 'bg-Turquesa/300 w-[275px] h-[733px] rounded-r-[8px] absolute bottom-[-27.9em] z-30 left-0'
          : 'hidden'
      }
    >
      <CloseButton ButtonClose={handleClose} />
      <ul className='text-white leading-[57px] pl-[28px] pt-[62px] text-xl font-light'>
        <li>
          <Link href={'/a'}>Feed</Link>
        </li>
        <li>
          <Link href={'/a/rutinas'}>Rutinas</Link>
        </li>
        <li>
          <Link href={'/a/coach'}>Coach</Link>
        </li>
        <li>
          <Link href={'/a/Perfil'}>Mi perfil</Link>
        </li>
      </ul>
    </article>
  );
};

export default HamburgerMenu;
