import React from 'react';
import { BiCheck } from 'react-icons/bi';
import "./services.css"

const Services = () => {
    return (
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          {/* <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
          </article> */}

          {/* END OF UI/UX */}

          <article className="service">
            <div className="service__head">
              <h3>Web Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Developing Across Browsers</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Creating Maintaining Mobile and Responsive Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Implementing design on mobile websites.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Following SEO best practices.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Work with APIs and RESTful Services</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Optimizing the user experience.</p>
              </li>
            </ul>
          </article>

          {/* END OF WEB DEVELOPMENT */}

          {/* <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
          </article> */}

          {/* Content Creation */}
        </div>
      </section>
    );
}

export default Services;
