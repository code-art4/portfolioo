import React from 'react';
import CTA from './CTA';
import HeaderSocials from './headerSocials';
import './header.css';

//image imports
import ME from "../../assets/me_1.jpg"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__container-text">
          <h5>Hello I'm</h5>
          <h1>Ojo Triumph</h1>
          <h5 className="text-light">Frontend developer</h5>
          <CTA />
        </div>
        <HeaderSocials />

        <div className="image">
          {/* <img src={ME} alt="me" className="me" /> */}
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
