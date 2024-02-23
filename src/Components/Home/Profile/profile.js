import React from 'react'
import './profile.css'
import file from '../../../Resume/Keerthan-shetty-resume.pdf'
import photo from '../../../assets/profile.png'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import Typical from 'react-typical'

const Profile = () => {
  return (
    <div>
      <div className='profile' id='profile'>
        <Container >
            <Row className='d-flex justify-content-center align-items-center'>
                <div className='col-lg-6 col-md-8 col-sm-12'>
                    <div className='profile-content'>
                        <h3>Hello, I'm <span style={{color:'#AD8BD0',fontWeight: 'bold'}}>Keerthan Shetty</span></h3>
                        <br/>
                        <div className='typer'>
                            <Typical 
                              steps={["Frontend Developer", 3000 , "Web Developer", 3000, "Automobile Engineer",3000]} 
                                 loop={Infinity} wrapper='h1' />
                        </div>
                        <br/>
                        <h6 style={{color:'silver'}}>I am Skilled and Passionate About Designing(Web Development) and a Vehicle Enthusiast too.</h6>
                        <br/>
                        <div className='social-icon'>
                            <ul>
                                <li><a href='https://github.com/Keerthan-Shetty' target='blank'><i class="fa-brands fa-github"></i></a></li>
                                <li><a href='https://www.linkedin.com/in/keerthan-shetty-7a810129a/' target='blank'><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href='mailto:keerthanshetty868@gmail.com' target='blank'><i class="fa-solid fa-envelope"></i></a></li>
                                <li><a aria-label="Chat on WhatsApp" href="https://wa.me/8680960260" target='blank'><i class="fa-brands fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                        <br/>
                        <div className='two-button'>
                          <Row>
                          <div className='col-lg-6 col-md-12 col-sm-12'>
                            <button className='button1'><a href={file} download='Keerthan.shetty-resume.pdf'><i class="fa-solid fa-download"></i>  Resume</a></button>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12'>
                            <button className='button2'><a href='tel:8680960260'>Hire Me</a> </button>
                            </div>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-4 col-sm-12'>
                  <div className='profile-photo'>
                  <img src={photo} alt='profile' />
                  </div>
                </div>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Profile
