import React from 'react'
import './project.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Heading from '../../Common/Heading/heading';
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'


const Project = () => {
  return (
    <div>
      <div className='project' id='project'>
        <Container>
            <Heading title='Projects' subTitle='Some Of The Projects Displayed Here...' />
            <Row>
            <div className='poject-category d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-img'>
                    <img src={img1} alt='web'/>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-content'>
                    <h4>House-Broker Website</h4>
                    <div className='dev d-flex'>
                        <p className='react'>React</p>
                        <p className='css'>Css</p>
                        <p className='bootstrap'>Bootstrap</p>
                    </div>
                    <div className='link'>
                       <p><a href='https://house-broker.netlify.app/' target='blank'> Visit Here <i class="fa-solid fa-truck-fast"></i><i class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
            </div>
            <div className='poject-category d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-img'>
                    <img src={img2} alt='web'/>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-content'>
                    <h4>Foodozor Website</h4>
                    <div className='dev d-flex'>
                        <p className='Html'>Html</p>
                        <p className='css'>Css</p>
                        <p className='bootstrap'>Bootstrap</p>
                        <p className='Javascript'>Javascript</p>
                    </div>
                    <div className='link'>
                       <p><a href='https://keerthan-shetty.github.io/foodozer-Website/' target='blank'> Visit Here <i class="fa-solid fa-truck-fast"></i><i class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
            </div>
            <div className='poject-category d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-img'>
                    <img src={img3} alt='web'/>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-content'>
                    <h4>Rent-It Website</h4>
                    <div className='dev d-flex'>
                    <p className='Html'>Html</p>
                        <p className='css'>Css</p>
                        <p className='bootstrap'>Bootstrap</p>
                        <p className='Javascript'>Javascript</p>
                    </div>
                    <div className='link'>
                       <p><a href='https://keerthan-shetty.github.io/Rent-it-Website/' target='blank'> Visit Here <i class="fa-solid fa-truck-fast"></i><i class="fa-solid fa-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
            </div>
            <div className='poject-category d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-img'>
                    <img src={img4} alt='web'/>
                </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='project-content'>
                    <h4>Smarti Website</h4>
                    <div className='dev d-flex flex-wrap'>
                        <p className='Html'>Html</p>
                        <p className='css'>Css</p>
                        <p className='bootstrap'>Bootstrap</p>
                    </div>
                    <div className='link'>
                       <p><a href='https://keerthan-shetty.github.io/Smart-watch/' target='blank'> Visit Here <i class="fa-solid fa-truck-fast"></i><i class="fa-solid fa-arrow-right"></i></a></p>
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

export default Project
