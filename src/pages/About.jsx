import React from 'react'
import Info from '../components/Information'
import Form from '../components/Form'
import Works from '../components/Works'
const About = () => {
  return (
   <div className="pt-5" style={{backgroundColor:"#0D1B3E"}}>
     <div  className=' pt-5'>
      <Info/>
      <Works/>
      <Form/>
    </div>
   </div>
  )
}

export default About
