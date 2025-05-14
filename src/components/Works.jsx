import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imageOne from '../images/qrcodelight.png';
import imageTwo from '../images/konga.png'
import imageThree from '../images/animeTracker.png'
import imageFour from '../images/quickGig.png'
import imageFive from '../images/animationPortfolio.png'
import imageSix from '../images/qrcodeDark.png'
import { BsGithub } from "react-icons/bs";

const Works = () => {
  return (
    <div className="py-5" style={{backgroundColor:"#0D1B3E", height:"auto"}}>
      <div className="Works-section p-sm-5 p-4 mx-auto" style={{maxWidth:"1500px"}}>
      <div className="Works-Header" style={{maxWidth:"1500px"}}>
        <h1 className='Works ms-sm-5 ps-sm-5 p-0 m-0'> My Works</h1>
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
              <img src={imageFour} className="card-img-top" style={{objectFit:"cover"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Quick-Gig</h5>
                <p className="card-text">A freelance marketplace for small gigs, connecting clients and freelancers with an intuitive, user-friendly platform.
                </p>
                <div className="d-flex justify-content-between px-3">
                <a href="#" className=" btn fw-bold">Visit</a>
                <a href="https://github.com/Deelolade/quick-gig-mvp " target="_blank" className="btn border-0 fw-bold">
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
                <h5 className="card-title">Anime Tracker</h5>
                <p className="card-text"> A web app to search, track, and manage your favorite anime with a responsive, interactive UI.</p>
                <div className="d-flex justify-content-between px-3">
                <a href="https://anime-tracker-lake.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
                <a href="https://github.com/Deelolade/anime-tracker " target="_blank" className="btn border-0 fw-bold">
                <BsGithub className='github' />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageSix} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Qr-Code Scanner & Generator</h5>
                <p className="card-text">A fast, browser-based tool to scan and generate QR codes instantly. Built with React, html5-qrcode, and Tailwind CSS. Clean UI, responsive design, and smooth user experience.</p>
                <div className="d-flex justify-content-between px-3">
                <a href="https://qr-code-scanner-generator.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
                <a  href="https://github.com/Deelolade/Qr-code-scanner " target="_blank" className="btn border-0 fw-bold">
                <BsGithub className='github' />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageTwo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">E-commerce Website</h5>
                <p className="card-text"> A fully responsive e-commerce platform with essential pages:
                Home page,
                  Single product page,
                  Search results page,
                  Shopping cart page,
                  Login page,</p>
                <div className="d-flex justify-content-between px-3">
                <a href="https://konga-clone-two.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
                <a href="https://github.com/Deelolade/KongaProject " target="_blank" className="btn border-0 fw-bold">
                <BsGithub className='github' />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <div className="card border-0">
              <img src={imageOne} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Qr-Code Scanner & Generator</h5>
                <p className="card-text">A fast, browser-based tool to scan and generate QR codes instantly. Built with React, html5-qrcode, and Tailwind CSS. Clean UI, responsive design, and smooth user experience.</p>
                <div className="d-flex justify-content-between px-3">
                <a href="https://qr-code-scanner-generator.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
                <a  href="https://github.com/Deelolade/Qr-code-scanner " target="_blank" className="btn border-0 fw-bold">
                <BsGithub className='github' />
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Works;
