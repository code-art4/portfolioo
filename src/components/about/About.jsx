import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';
import ME from '../../assets/assets/me-about.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" srcset="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem, doloremque perferendis sapiente veniam suscipit totam error, officia excepturi quod possimus asperiores labore eligendi obcaecati distinctio deleniti a non expedita!
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
