import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Header = () => {
    const location = useLocation();
    const [clicked, setClicked] = useState('');
    const [click, setClick] = useState(false);

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleLinkClick = (name) => {
        setClicked(name);
    };
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShow(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);
    useEffect(() => {
        const pathMap = {
            '/': 'Home',
            '/about': 'About',
            '/works': 'Works'
        };
        setClicked(pathMap[location.pathname] || '');
    })
    return (
        <div className={`sticky-navbar mx-auto ${show ? 'show' : 'hide'}`} style={{ backgroundColor: "#0D1B3E", maxWidth: "100%" }}>
            <div className="mx-auto  " style={{width:"100vw", maxWidth:"1500px"}}>
            <nav className=" navbar d-flex  ms-auto" style={{maxWidth:"1500px" , }}>
                <div className="Main-Navbar d-flex px-3 justify-content-evenly align-items-center  " style={{maxWidth:"1250px"}} >
                    <ul className='d-flex my-3 Nav-list justify-content-evenly ' >
                        <li className='fw-bolder'>

                            <Link
                                className={` px-sm-3 py-sm-2 fs-sm-4 px-2 fs-5 py-2 px-2 rounded-5 navbar-brand Nav-items  fw-bolder ${clicked === 'Home' ? 'active' : ''}`}
                                to="/"
                                onClick={() => handleLinkClick('Home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='fw-bolder'>
                            <Link
                                className={`px-sm-3 py-sm-2 px-2 py-2 fs-sm-4 fs-5 rounded-5 navbar-brand Nav-items  fw-bolder ${clicked === 'About' ? 'active' : ''}`}
                                to="/about"
                                onClick={() => handleLinkClick('About')}
                            >
                                About
                            </Link>
                        </li>
                        <li className='fw-bolder'>
                            <Link
                                className={`px-sm-3 py-sm-2 px-2 py-2 fs-sm-4 fs-5 rounded-5 navbar-brand Nav-items  fw-bolder ${clicked === 'Works' ? 'active' : ''}`}
                                to="/works"
                                onClick={() => handleLinkClick('Works')}
                            >
                                Works
                            </Link>
                        </li>
                    </ul>
                    <div className="social-icons d-flex  pt-2 justify-content-evenly" >
                        <div className="github">
                            <a href="https://github.com/deelolade" target='_blank'>
                                <BsGithub className='github' />
                            </a>
                        </div>
                        <div className="linkedIn">
                            <a href="https://linkedin.com/in/deelolade" target='_blank'>
                                <FaLinkedin className='linkedIn' />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default Header;
