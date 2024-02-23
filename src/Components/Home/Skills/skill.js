import React from 'react'
import './skill.css'
import Heading from '../../Common/Heading/heading'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <div>
      <div className='skills' id='skills'>
        <Container>
          <Heading title='Skills' subTitle='This is the category which I have Experienced and Trained'/>
          <Row>
            <div className='col-lg-6 col-md-6 col-md-12'>
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
                  <div class="progress-bar" style={{width:'70%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>React</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'75%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-md-12'>
              <div className='skill2'>
              <div className='s1'>
                  <span className='s1-1'>Node.js</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'65%'}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>Express</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'65%'}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                </div>
                <div className='s1'>
                  <span className='s1-1'>MongoDB</span>
                  <div className='length-1'>
                  <div class="progress-bar" style={{width:'70%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div> 
    </div>
  )
}

export default Skill
