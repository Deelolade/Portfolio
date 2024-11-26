import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' footer container-fluid ps-5'>
        <div className="Footer-section p-5 row">
            <hr style={{maxWidth:"100%",backgroundColor:"#6e44ff",height:"1px"}}/>
            <div className="Footer-top-section d-flex row col-sm-12 col-md-12 col-lg-5">
                <ul className=' lh-lg  Footer-top col-sm-12 col-md-5 col-lg-5'>
                    <li><h6 className='fs-3'>Say Hello</h6></li>
                    <li><a href="https://wa.me/9122193201?text=Hello%20Habeeb%20I%20would%20like%20to%20have%20a%20discussion%20with%20you%20about%20my%20project" target="_blank">whatsapp</a></li>
                    <li><a href="mailto:oluwanisholaopeyemi2004@gmail.com?subject=Inquiry&body=Hello Habeeb I would like to ">mail</a></li>
                    <li><a href="https://t.me/@deelolade?text=Hello%20Habeeb%20I%20would%20like%20to%20have%20a%20discussion%20with%20you%20about%20a%20project" target="_blank">telegram</a></li>
                </ul>
                <ul className='mt-5  lh-lg Footer-top-two col-sm-12 col-md-5 col-lg-5' >
                    <li><Link to="">My Work</Link></li>
                    <li><Link to="">My Project</Link></li>
                    <li><Link to="">My Resume</Link></li>
                </ul>
            </div>
            <div className="footer-icons d-flex col-sm-12 col-md-12 col-lg-5 my-auto " >
                    <div className="footer-github me-3 ">
                        <a href="https://github.com/deelolade" target='_blank'>
                        <BsGithub className='github' />
                        </a>
                    </div>
                    <div className="footer-linkedIn ms-1">
                        <a href="https://linkedin.com/in/deelolade" target='_blank'>
                        <FaLinkedin className='linkedIn'/>
                        </a>
                    </div>
                </div>
            <div className="Footer-bottom mt-5 mb-0 pt-5 container-fluid ">
                <hr />
                <p className='text-center'>�� &copy; 2024 Deelolade. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
