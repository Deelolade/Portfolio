import React, { useEffect } from 'react'
import ImageOne from '../images/deeloladeprofile.jpg'
import aos from "aos"
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
    useEffect(() => {
        aos.init({
            duration: 1500
        });
    }, [])
    return (
        <div >
            <div className="About-section px-3 pt-4 p-sm-5 pb-5">
                <div className="About-Header mx-auto" style={{ maxWidth: "1500px" }}>
                    <h1 className='About-Me ps-sm-5' >About Me</h1>
                </div>
                <div className="About-container">
                    <div className="row px-sm-2 About-container">
                        <div className=" col-sm-12 col-md-9 col-lg-7 col-xl-5 mx-auto col-xxl-6 About-col ">
                            <div className="p-sm-5 pe-sm-0 About-Image  ">
                                <img src={ImageOne} alt="" loading="lazy" className='About-Img' data-aos="fade-up" />
                                <div className="about-overlay mt-sm-5 ms-sm-5 pb-sm-5">
                                    <div className="about-overlay-text">
                                        <h2 className='fw-bolder' style={{ color: "#6E44FF", }}>Explore My Work</h2>
                                        <p className='fw-bolder' style={{ color: "#6e44ff", }}>Let’s Create Something Amazing Together</p>
                                        <FaArrowRight className="about-overlay-text" style={{ color: "#6e44ff" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12 col-md-12 col-lg-5 col-xl-6 col-xxl-6 mt-5 About-col">
                            <div className="p-4  mt-3 About-para mx-auto" data-aos="fade-up">
                                <h1 className='About-heading mb-4'>Full-Stack Developer building web apps for clients worldwide</h1>
                                <p className='About-text pe-4' >
                                    I’m a Full-Stack Developer with over 3 years of experience building fast, scalable, and responsive web applications. I specialize in the MERN stack MongoDB, Express.js, React, and Node.js creating full-featured solutions that are both functional and visually engaging.From frontend to backend, I bring projects to life using tools like Tailwind CSS, Bootstrap, and animation libraries such as SwiperJS and AOS to craft intuitive user interfaces with smooth interactions.Beyond full-stack apps, I also work extensively with WordPress, where I develop custom themes, plugins, and integrations to help businesses extend their digital presence without sacrificing performance or flexibility.I’m passionate about writing clean, maintainable code and creating digital experiences that align with both user needs and business goals.</p>
                                <p className='about-text-sm'>I'm a Full-Stack MERN Developer and WordPress Expert with 3 years of experience building scalable, high-performance web applications. I work with the MERN stack (MongoDB, Express.js, React, Node.js) to create dynamic and efficient solutions, and I design responsive user interfaces using Tailwind CSS and Bootstrap. I also enhance user experience through interactive animations with SwiperJS and AOS. In addition, I'm proficient in WordPress development building custom themes, plugins, and integrating third-party services. My focus is on delivering clean, user-friendly, and long-lasting solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
