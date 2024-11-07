import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imageOne from '../images/AboutMe.png';
import imageTwo from '../images/konga.png'
import imageThree from '../images/wordpress.png'

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
                <h5 className="card-title">Konga-Clone</h5>
                <p className="card-text"> Implemented Home-page, Single-product-page, Search-results-page,Shopping-cart-page, Login-page pages and functionlaity to perfrom just like the main Konga website
                </p>
                <a href="#" className=" btn fw-bold">See project</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageThree} className="card-img-top" alt="..." />
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
