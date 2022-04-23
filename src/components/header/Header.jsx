import React,{ useRef, useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './headerSocials';
import './header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//image imports
import ME from "../../assets/me_1.jpg"

const Header = () => {

  const ref = useRef(null);

  const home = gsap.timeline();

  const headerText = useRef(null);

  useEffect(() => {
    home.from(
      headerText.current,
      {
        duration: 0.9,
        opacity: 0,
        scale: 40,
        ease: 'cubic-bezier(.17,.67,.83,.67)',
      },
      '-=.5'
    );

    home.from('#headerCTA', { delay: .3 ,x: 300, ease: 'ease-in', duration: 1.5, opacity: 0 });
    home.to('#headerCTA', { x: 0, opacity: 1 });

    home.from('.fade-in', { opacity: 0, ease: 'ease-in-out', duration: 0.3 });       
    home.to('.fade-in', { opacity: 1, });   
  });


  return (
    <header ref={ref}>
      <div className="container header__container">
        <div className="header__container-text">
          <div ref={headerText}>
            <h5>Hello I'm</h5>
            <h1>Ojo Triumph</h1>
            <h5 className="text-light">Frontend developer</h5>
          </div>

          <div id="headerCTA">
            <CTA />
          </div>
        </div>

        <div class="fade-in">
          <HeaderSocials />
        </div>

        <div className="image">
          {/* <img src={ME} alt="me" className="me" /> */}
        </div>

        <a href="#contact" className="scroll__down fade-in">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
