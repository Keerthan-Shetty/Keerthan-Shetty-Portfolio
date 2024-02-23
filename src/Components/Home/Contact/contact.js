import React, {useRef,useState} from 'react'
import './contact.css'
import Heading from '../../Common/Heading/heading'
import carto1 from '../../../assets/carto1.png'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const Contact = () => {
    
  const [formData, setFormData] = useState({userName: '',email: '',subject: '',description: ''});
  
  const [error, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // emailjs
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formValidation = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = 'UserName is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }else{
      newErrors.email = 'Email is perfect and valid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (!formValidation()) {
       console.log('Form submitted:', formData);
       setSuccess(`${formData.userName}, Your Form Submitted Successfully.`);
   
      // Reset form
      setFormData({
        userName: '',
        email: '',
        subject: '',
        description: '',
      });
    }else{
      console.log('form not submitted')
    }
    emailjs
      .sendForm('service_m1d7cxp', 'template_1hqas85', form.current, {
        publicKey: 'wpgYrDFQm2rhKEmfv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
                            <form ref={form} onSubmit={validateForm} >
                                <div className="loginform">
                                    <div className="heading text-center ">
                                        <h2>Get In Touch</h2>
                                    </div><br />
                                    <div className="inputbox">
                                        <input type="text" name="userName" id="userName" placeholder='USER-NAME' value={formData.userName} onChange={handleChange} />
                                
                                        {error.userName && <span>{error.userName}</span>}
                                    </div>
                                    <br />
                                    <div className="inputbox">
                                        <input type="email" name="email" id="email" placeholder='E-MAIL' value={formData.email} onChange={handleChange} />
                                       
                                        {error.email && <span>{error.email}</span>}
                                    </div>
                                    <br />
                                    <div className="inputbox">
                                        <input type="subject" name="subject" id="subject"  placeholder='SUBJECT' value={formData.subject} onChange={handleChange} />
                                        
                                        {error.subject && <span>{error.subject}</span>}
                                    </div>
                                    <br/>
                                    <div className="inputbox">
                                        <textarea name='description' id='description' style={{width:'100%'}} rows='5' placeholder='DESCRIPTION' value={formData.description} onChange={handleChange} ></textarea>
                                        
                                        {error.description && <span>{error.description}</span>}
                                    </div>
                                    <br/>
                                    <div className="submitbutton text-center">
                                        <button type='submit'>SUBMIT</button>
                                    </div>
                                </div>
                               {/* <div className='overlay' id='overlay'> */}
                                    {success && <div className="success">{success}</div>}
                                {/* </div>  */}
                               {/* {isSubmitted && <div className="success-message">Form submitted successfully!</div>}*/}
                            </form> 

                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Contact
