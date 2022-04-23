import React, { useState, useEffect, useRef } from 'react';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

import { gsap } from 'gsap';

import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const ref = useRef(null);

  const home = gsap.timeline();

  const nav = useRef(null);

  useEffect(() => {    
    home.from('#nav', {            
      delay: 1,
      ease: 'ease-in',
      duration: 1.5,
      opacity: 0,
    });
    home.to('#nav', { opacity: 1 });   
  },[]);


  return (
    <nav id="nav">
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
