import React from 'react';
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.css';

import AVTR1 from '../../assets/assets/avatar1.jpg'
import AVTR2 from '../../assets/assets/avatar2.jpg';
import AVTR3 from '../../assets/assets/avatar3.jpg';
import AVTR4 from '../../assets/assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ratione dignissimos repudiandae, molestiae quae nulla nobis nostrum velit? Possimus, consequatur.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ratione dignissimos repudiandae, molestiae quae nulla nobis nostrum velit? Possimus, consequatur.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ratione dignissimos repudiandae, molestiae quae nulla nobis nostrum velit? Possimus, consequatur.',
  },
  {
    avatar: AVTR2,
    name: 'Nana Ama McBrown',
    review:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ratione dignissimos repudiandae, molestiae quae nulla nobis nostrum velit? Possimus, consequatur.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}        
      >
        {!!data &&
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
