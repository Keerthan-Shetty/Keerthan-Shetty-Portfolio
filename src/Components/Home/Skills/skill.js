import React from 'react'
import './skill.css'
import Heading from '../../Common/Heading/heading'
import { Container } from 'react-bootstrap'
// import { Row } from 'react-bootstrap'
import html from '../../../assets/html-5.png'
import css from '../../../assets/css-3.png'
import js from '../../../assets/js.png'
import react from '../../../assets/react.png'
import node from '../../../assets/nodejs.png'
import express from '../../../assets/express.png'
import mongodb from '../../../assets/Mongodb.png'
import python from '../../../assets/python.png'
import autocad from '../../../assets/Autocad-Logo.png'

const Skill = () => {
  return (
    <div>
      <div className='skills' id='skills'>
        <Container>
          <Heading title='Skills' subTitle='This is the category which I have experienced and trained'/>
          {/* <Row> */}
            {/* <div className='col-lg-6 col-md-6 col-md-12'>
              <div className='skill1'>
                <div className='s1'>
                  <span className='s1-1'>Html</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'95%'}} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>Css</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>Bootstrap</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>Javascript</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'80%'}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>React</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'85%'}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-md-12'>
              <div className='skill2'>
              <div className='s1'>
                  <span className='s1-1'>Node.js</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'85%'}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">85%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>Express</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'80%'}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>MongoDB</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'85%'}} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className='skill-icon'>
              <p><img src={html} alt='html' /></p>
              <p><img src={css} alt='css' /></p>
              <p><img src={js} alt='js' style={{borderRadius:'30%'}} /></p>
              <p><img src={react} alt='react' /></p>
              <p><img src={node} alt='nodejs' /></p>
              <p><img src={express} alt='express' /></p>
              <p><img src={mongodb} alt='mongodb' /></p>
              <p><img src={python} alt='python' /></p>
              <p><img src={autocad} alt='autocad' style={{width:'150px'}}/></p>
            </div>
          {/* </Row> */}
        </Container>
      </div> 
    </div>
  )
}

export default Skill
