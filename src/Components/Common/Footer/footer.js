import React from 'react'
import './footer.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
   
      <div className='footer'>
        <Container>
            <div className='name-content text-center'>
                <p className='d-flex justify-content-center align-items-center'>Thank You For Visiting Me, <i class="fa-solid fa-heart"></i> From Keerthan Shetty</p>
            </div>
        </Container>
      </div>
    
  )
}

export default Footer
