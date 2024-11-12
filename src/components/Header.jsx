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
    useEffect(()=> {
        const pathMap = {
            '/': 'Home',
            '/about': 'About',
            '/works': 'Works'
        };
        setClicked(pathMap[location.pathname] || ''); 
    })
    return (
        <div className={`sticky-navbar ${show ? 'show' : 'hide'}`} style={{backgroundColor:"#0D1B3E",maxWidth:"100%"}}>
            <nav className=" navbar ms-auto pe-4">
                <div className="Main-Navbar" >
                    <ul className='d-inline-flex mt-3 Nav-list mx-auto flex-1' >
                        <li>
                            
                            <Link
                                className={`px-3 py-2 rounded-5 navbar-brand Nav-items ms-4 me-4 fw-bolder ${clicked === 'Home' ? 'active' : ''}`}
                                to="/"
                                onClick={() => handleLinkClick('Home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-5 navbar-brand Nav-items ms-5 me-4 fw-bolder ${clicked === 'About' ? 'active' : ''}`}
                                to="/about"
                                onClick={() => handleLinkClick('About')}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-5 navbar-brand Nav-items ms-5 me-4 fw-bolder ${clicked === 'Works' ? 'active' : ''}`}
                                to="/works"
                                onClick={() => handleLinkClick('Works')}
                            >
                                Works
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social-icons d-flex  pt-2" >
                    <div className="github me-3 ">
                        <a href="https://github.com/deelolade" target='_blank'>
                        <BsGithub className='github' />
                        </a>
                    </div>
                    <div className="linkedIn ms-1">
                        <a href="https://linkedin.com/in/deelolade" target='_blank'>
                        <FaLinkedin className='linkedIn'/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
