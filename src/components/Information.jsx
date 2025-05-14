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
                <div className="About-Header mx-auto" style={{maxWidth: "1500px"}}>
                    <h1 className='About-Me ps-sm-5' >About Me</h1>
                </div>
                <div className="About-container">
                    <div className="row px-sm-2 About-container">
                        <div className=" col-sm-12 col-md-9 col-lg-7 col-xl-5 mx-auto col-xxl-6 About-col ">
                            <div className="p-sm-5 pe-sm-0 About-Image  ">
                                <img src={ImageOne} alt="" loading="lazy" className='About-Img'  data-aos="fade-up" />
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
                                <h1 className='About-heading mb-4'>I am a Frontend Developer Working from Lagos,Nigeria.</h1>
                                <p className='About-text pe-4' >
                                    As a highly skilled Full-Stack MERN Developer and WordPress Expert, I bring over 3 years of hands-on experience in designing and developing scalable, high-performance web applications. With a deep understanding of the MERN stack—MongoDB, Express.js, React, and Node.js—I specialize in creating dynamic, responsive, and efficient applications that meet user needs and business goals. <br /> My expertise extends beyond just backend and frontend development. I am proficient in integrating various CSS frameworks like Tailwind CSS and Bootstrap, allowing me to design visually appealing and mobile-responsive interfaces that enhance user experiences. I also leverage popular animation libraries such as Swiperjs and AOS to create smooth, engaging user interactions that bring websites to life. <br />In addition to my full-stack development skills, I have a strong command over WordPress, including building custom themes, plugins, and integrating third-party services to extend functionality. Whether it's customizing a WordPress site or building a complete web application from scratch, I focus on delivering clean, maintainable, and scalable solutions. </p>
                                    <p className='about-text-sm'>I’m a Full-Stack MERN Developer and WordPress Expert with 3 years of experience building scalable web apps. I work with the MERN stack (MongoDB, Express, React, Node.js) and design responsive UIs using Tailwind CSS and Bootstrap. I also create interactive experiences with Swiperjs and AOS animations. On top of that, I’m skilled in WordPress—custom themes, plugins, and integrations. I focus on delivering high-quality, user-friendly solutions that are built to last.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
