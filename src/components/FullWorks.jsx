import React from 'react'
import imageOne from '../images/qrcodelight.png';
import imageTwo from '../images/konga.png'
import imageThree from '../images/animeTracker.png'
import imageFour from '../images/quickGig.png'
import imageFive from '../images/animationPortfolio.png'
import imageSix from '../images/qrcodeDark.png'

import { BsGithub } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";


const FullWorks = () => {
  return (
    <div className='Total-work-section mx-auto py-5'>
      <div className=" row  work-section-row mx-auto" style={{ maxWidth: "1500px" }}>
      <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4 ">
          <img src={imageFour} className="works-card-img-top" alt="..." />
          <div className="works-card-body mt-3">
            <h5 className="works-card-title">Quick-Gig</h5>
            <p className="works-card-text"> A freelance marketplace for small gigs, connecting clients and freelancers with an intuitive, user-friendly platform.
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="#" className=" btn fw-bold" >Visit</a>
              <a href="https://github.com/Deelolade/quick-gig-mvp " target="_blank" className="btn  border-0 fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
        <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4">
          <img src={imageOne} className="works-card-img-top" alt="..." />
          <div className="works-card-body">
            <h5 className="works-card-title mt-3">Qr-Code Scanner & Generator</h5>
            <p className="works-card-text"> A fast, browser-based tool to scan and generate QR codes instantly. Built with React, html5-qrcode, and Tailwind CSS. Clean UI, responsive design, and smooth user experience.
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="https://qr-code-scanner-generator.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
              <a href="https://github.com/Deelolade/Qr-code-scanner " target="_blank" className="btn  border-0 fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
        <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4">
          <img src={imageTwo} className="works-card-img-top" alt="..." />
          <div className="works-card-body mt-3">
            <h5 className="works-card-title">E-commerce Website</h5>
            <p className="works-card-text"> A fully responsive e-commerce platform with essential pages:
                Home page,
                  Single product page,
                  Search results page,
                  Shopping cart page,
                  Login page,
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="https://konga-clone-two.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
              <a href="https://github.com/Deelolade/KongaProject " target="_blank" className="btn  border-0 fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
        <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4">
          <img src={imageThree} className="works-card-img-top" alt="..." />
          <div className="works-card-body mt-3">
            <h5 className="works-card-title">Anime Tracker</h5>
            <p className="works-card-text"> A web app to search, track, and manage your favorite anime with a responsive, interactive UI.
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="https://anime-tracker-lake.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
              <a href="https://github.com/Deelolade/anime-tracker " target="_blank" className="btn  border-0 fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
        
        <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4 ">
          <img src={imageFive} className="works-card-img-top" alt="..." />
          <div className="works-card-body mt-3">
            <h5 className="works-card-title">simple animations portfolio</h5>
            <p className="works-card-text"> A collection of smooth, interactive animations built with Tailwind CSS and React for engaging web experiences.
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="http://animations-portfolio.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
              <a href="https://github.com/Deelolade/findMyDate " target="_blank" className="btn  border-0  fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
        <div className="works-card p-4 rounded-4 col-xs-12 col-md-5 col-lg-4">
          <img src={imageSix} className="works-card-img-top" alt="..." />
          <div className="works-card-body">
            <h5 className="works-card-title mt-3">Qr-Code Scanner & Generator</h5>
            <p className="works-card-text"> A fast, browser-based tool to scan and generate QR codes instantly. Built with React, html5-qrcode, and Tailwind CSS. Clean UI, responsive design, and smooth user experience.
            </p>
            <div className="d-flex justify-content-between px-3 mt-5">
              <a href="https://qr-code-scanner-generator.vercel.app/" target='_blank' className=" btn fw-bold">Visit</a>
              <a href="https://github.com/Deelolade/Qr-code-scanner " target="_blank" className="btn  border-0 fw-bold">
                <BsGithub className='github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullWorks
