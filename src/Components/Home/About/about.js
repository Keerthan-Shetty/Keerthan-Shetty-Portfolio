import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import Heading from '../../Common/Heading/heading'

const About = () => {
  return (
    <div>
      <div className='about' id='about'>
        <Container>
          <Heading title= 'About Me'/>
            <Row className='d-flex justify-content-center align-items-center'>
              <div className='col-lg-6 col-md-12 col-sm-12 car'>
                <div className='card-container'>
                <div className='card'>
                  <div className=' front-card d-flex justify-content-center align-items-center'>
                    <h2>Key-Skills</h2>
                  </div>
                  <div className=' back-card back1 d-flex flex-column justify-content-center align-items-center'>
                    <p>Active Listener</p>
                    <p>Innovative Thinker</p>
                    <p>Time Management</p>
                    <p>Ledership</p>
                    <p>Teamwork & smartwork</p>
                  </div>
                </div> 
                </div>
                <br />
                <div className='card-container rightside'>
                <div className='card'>
                  <div className=' front-card d-flex justify-content-center align-items-center'>
                    <h2>Certification</h2>
                  </div>
                  <div className=' back-card back2 d-flex flex-column justify-content-center align-items-center'>
                    <p>Full-Stack Developer</p>
                    <p>AutoCAD</p>
                  </div>
                </div> 
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                  <div className='about-content'>
                    <h5>Hello Visitor , I have completed my Bachelor of Engineering in Automobile Engineering in the year of 2022.
                        I am passionate about vehicles and designing over my career. After completing my graduation, I was working under 
                        the Poduction Department in Wipro Infrastructure Engineering for a year. <br/><br/> Already I had a interest in designing , So I decided to step forward 
                        in Web development which I got more interest while experiencing the thing. Gradually started learning about Full-stack development and completed my course over a couple of months. I have designed multiple website 
                        during learning period
                    </h5>
                  </div>
              </div>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
