import React, { useEffect } from 'react'
import aos from "aos"
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import Downwards from '../animation/downwards.json'
import Lottie from 'lottie-react'
import About from '../components/Information'
import Efficiency from '../components/Efficiency'
import Works from '../components/Works'
import Form from '../components/Form'


const Home = () => {
    useEffect(()=>{
        aos.init({
          duration: 1500
        });
      },[])
return (
    <div className="" >
        <div className='Header mt- ' >
            <h1 data-aos="fade-down"><span data-aos="fade-up">Hi. I'm Habeeb.</span> <br /><span data-aos="fade-up">A Developer.</span></h1>
            <div className="home-text mx-auto mt-4">
                    <p className=''data-aos="fade-down">I’m a passionate and driven Front developer who thrives on  transforming<br />  innovative ideas into reality through code.</p>
                </div>
            <div className="animation mt-3">
                <Lottie animationData={Downwards} style={{ width: '100%', height: '100%',color:"red" }}/>
            </div>
        </div>
        <About/>
        <Efficiency/>
        <Works/>
        <Form/>
    </div>
    )
}

export default Home
