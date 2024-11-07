import React, { useEffect } from 'react'
import ImageOne from '../images/AboutMe.png'
import aos from "aos"
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
    useEffect(()=>{
        aos.init({
          duration: 1500
        });
      },[])
  return (
    <div >
        <div className="About-section p-5 pb-5">
            <div className="About-Header">
            <h1 className='About-Me ms-5 ps-5' >About Me</h1>
            </div>
            <div className="About-container">
                <div className="row px-2">
                    <div className="col-5 ">
                        <div className="p-5  pe-0 About-Image  ">
                            <img src={ImageOne} alt="" className='About-Img'  data-aos="fade-up"/>
                            <div className="about-overlay mt-5 ms-5 pb-5">
                                <div className="about-overlay-text">
                                    <h2 className='fw-bolder' style={{color:"#6E44FF",}}>Explore My Work</h2>
                                    <p  className='fw-bolder' style={{color:"#6e44ff",}}>Let’s Create Something Amazing Together</p>
                                    <FaArrowRight className="about-overlay-text" style={{color:"#6e44ff"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 mt-5">
                        <div className="p-4  mt-3"data-aos="fade-up">
                        <h1 className='About-heading mb-4'>I am a Frontend Developer <br />Working from Lagos,Nigeria.</h1> 
                            <p className='About-text pe-4' >Whether I’m working on solo projects or contributing to larger teams, I prioritize clear communication and adaptability to meet evolving project requirements.I am committed to lifelong learning and continuously improving my skills. I enjoy tackling complex challenges, optimizing processes, and keeping up with industry trends.I’m excited to connect with like-minded individuals and contribute to projects that make a difference! <br /> <br />I'm eager to learn and explore technologies like PHP and databases, which will allow me to create seamless integrations and more robust solutions.Collaboration is essential to me; I thrive in team environments where creativity and problem-solving flourish. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
