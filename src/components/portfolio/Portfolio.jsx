import React from 'react';
import './portfolio.css';
import IMG1 from "../../assets/chat_app.png"
import IMG2 from '../../assets/sunset.jpg';
import IMG3 from '../../assets/assets/portfolio3.jpg';
import IMG4 from '../../assets/assets/portfolio4.jpg';
import IMG5 from '../../assets/assets/portfolio5.png';
import IMG6 from '../../assets/assets/portfolio6.jpg';

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Website authentication, Maintaining chats and profile',
    github: 'https://github.com/code-art4/chat-app',
    demo: 'https://chat-app-ax658vq0g-ojo-triumph.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Website tracking of weather in any city',
    github: 'https://github.com/code-art4/weather-web-app',
    demo: 'https://lweather.netlify.app/',
  },
  {
    id: 3,
    image: IMG5,
    title: 'Website design of static website',
    github: 'https://github.com/code-art4/LaslesVPN',
    demo: '',
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Maintaining tasks and tracking progress',
  //   github: 'https://github.com/',
  //   demo: '',
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com/',
  //   demo: '',
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com/',
  //   demo: '',
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(el => {
            return (
              <article className="portfolio__item" key={el.id}>
                <div className="portfolio__item-image">
                  <img src={el.image} alt={el.title} />
                </div>
                <h3>{el.title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={el.github}
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a href={el.demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );        
          })
        }
        
      </div>
    </section>
  );
};

export default Portfolio;
