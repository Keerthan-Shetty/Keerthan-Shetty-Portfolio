import React, {useState} from 'react'
import './contact.css'
import Heading from '../../Common/Heading/heading'
import carto1 from '../../../assets/carto1.png'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import emailjs from 'emailjs-com';

const Contact = () => {
    
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    subject: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUserName, setSubmittedUserName] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = () => {
    emailjs.send('service_m1d7cxp', 'template_1hqas85', formData, 'wpgYrDFQm2rhKEmfv')
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setSubmittedUserName(formData.userName);
      // Send email
      sendEmail();
      
      // Reset form
      setFormData({
        userName: '',
        email: '',
        subject: '',
        description: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  
  return (
        <div>
            <div className='contact' id='contact'>
                <Container>
                    <Heading title='Contact' subTitle='Just Connect with me' />
                    <Row className='d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='cartoon'>
                                <img src={carto1} alt='cartoon' />
                            </div>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <form onSubmit={handleSubmit} >
                                {/* <div className="loginform">*/}
                                    <div className="heading text-center ">
                                        <h2>Get In Touch</h2>
                                    </div><br /> 
                                    <div className="inputbox">
                                        <input type="text" name="userName" id="userName" placeholder='USER-NAME' value={formData.userName} onChange={handleChange} />
                                
                                        {errors.userName && <span>{errors.userName}</span>}
                                    </div>
                                    <br />
                                    <div className="inputbox">
                                        <input type="email" name="email" id="email" placeholder='E-MAIL' value={formData.email} onChange={handleChange} />
                                       
                                        {errors.email && <span>{errors.email}</span>}
                                    </div>
                                    <br />
                                    <div className="inputbox">
                                        <input type="subject" name="subject" id="subject"  placeholder='SUBJECT' value={formData.subject} onChange={handleChange} />
                                        
                                        {errors.subject && <span>{errors.subject}</span>}
                                    </div>
                                    <br/>
                                    <div className="inputbox">
                                        <textarea name='description' id='description' style={{width:'100%'}} rows='5' placeholder='DESCRIPTION' value={formData.description} onChange={handleChange} ></textarea>
                                        
                                        {errors.description && <span>{errors.description}</span>}
                                    </div>
                                    <br/>
                                    <div className="submitbutton text-center">
                                        <button type='submit'>SUBMIT</button>
                                    </div>
                                {/* </div> */}
    
                            </form> 
                            {isSubmitted && (<div className="success-message"><p>{submittedUserName}, Your Form submitted successfully!</p>
        </div>)}

                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Contact
