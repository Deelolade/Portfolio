import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imageOne from '../images/AboutMe.png';
import imageTwo from '../images/konga.png'
import imageThree from '../images/wordpress.png'
import { BsGithub } from "react-icons/bs";

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
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageTwo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Konga Replica project</h5>
                <p className="card-text"> Pages implemented Home page,Single product page,Search results page,Shopping cart page,Login page.
                </p>
                <div className="d-flex justify-content-between px-3">
                <a href="#" className=" btn fw-bold">Visit</a>
                <a href="https://github.com/Deelolade/KongaProject " target="_blank" className="btn border-0 fw-bold">
                <BsGithub className='github' />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageThree} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">My Wordpress portfolio</h5>
                <p className="card-text">Browse my wordpress portfolio and let's create something amazing for your brand with zero lines code!</p>
                <a href="#" className=" btn fw-bold">Say Hello</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageOne} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className=" btn fw-bold">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageOne} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className=" btn fw-bold">Go somewhere</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
