import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imageOne from '../images/AboutMe.png';

const Works = () => {
  return (
    <div className="Works-section p-5">
      <div className="Works-Header">
        <h1 className='Works ms-5 ps-5'>Works</h1>
      </div>
      <div className="mx-auto slider">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          className="mySwiper"
        >
          <SwiperSlide className='SwiperSlide'>
            <a href="">
              <img src={imageOne} alt="Project 1" className='SwiperImage' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <a href="">
              <img src={imageOne} alt="Project 1" className='SwiperImage' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <a href="">
              <img src={imageOne} alt="Project 1" className='SwiperImage' />
            </a>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <a href="">
              <img src={imageOne} alt="Project 1" className='SwiperImage' />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
