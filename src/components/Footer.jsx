import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <div className="Footer-section p-5">
            <hr style={{maxWidth:"100%",backgroundColor:"#6e44ff"}}/>
            <div className="Footer-top-section d-flex mt-5 mb-5 ms-5 ps-5">
                <ul className='ps-5 lh-lg me-5'>
                    <li><h6 className='fs-3'>Say Hello</h6></li>
                    <li><a href="https://wa.me/9122193201?text=Hello%20Habeeb%20I%20would%20like%20to%20have%20a%20discussion%20with%20you%20about%20my%20project" target="_blank">whatsapp</a></li>
                    <li><a href="mailto:oluwanisholaopeyemi2004@gmail.com?subject=Inquiry&body=Hello Habeeb I would like to ">mail</a></li>
                    <li><a href="https://t.me/@deelolade?text=Hello%20Habeeb%20I%20would%20like%20to%20have%20a%20discussion%20with%20you%20about%20a%20project" target="_blank">telegram</a></li>
                </ul>
                <ul className='mt-5 ms-5 lh-lg' >
                    <li><Link to="">My Work</Link></li>
                    <li><Link to="">My Project</Link></li>
                    <li><Link to="">My Resume</Link></li>
                </ul>
            </div>
            <div className="Footer-bottom mt-5 mb-0 pt-5">
                <hr />
                <p className='text-center'>�� &copy; 2024 Deelolade. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
