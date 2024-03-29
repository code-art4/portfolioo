import React, { useEffect, useRef } from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';
import ME from '../../assets/me_1.jpg';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('#about'),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline();
    tl.to('#ball1', { x: 0, ease: 'bounce.in', duration: 2 });    
  }, []);

  return (
    <section id="about" ref={ref}>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards" id="ball1">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            {/* <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>

          <p>
            <p>
              I am a Frontend developer who specializes on React.js to build
              websites and to make perfect and compelling websites for the
              users. I have knowledge on Backend tools like Node.js, Php but I
              focus on the frontend aspect.
            </p>
            <p>
              As a frontend developer, I'm often tasked with making great ui/ux
              for the users which I have done magnificently over the years. I am
              often tasked with functionalities of the website as well like
              linking REST APIs among others.{' '}
            </p>
            I like to speak to my clients when working on a project so as to
            ensure that they are left satisfied and pleased with my work
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
