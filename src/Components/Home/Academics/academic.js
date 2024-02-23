import React , {useState} from 'react'
import './academic.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Heading from '../../Common/Heading/heading';


const Academic = () => {
  const[toggleState,setToggleState] = useState(1);
 
  function toggleTab(id){
    setToggleState(id);
  }
  

  return (
    <div>
      <div className='academic' id='academic'>
        <Container >
         <Heading title='Academics' subTitle='Life Of Study And Results'/>
         <Row className='d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <div className='tabs'>
                      <div className='list'>
                        <p onClick={()=>toggleTab(1)} className={toggleState === 1 ? "date active-date":"date"} >2018-2022</p>
                        <p onClick={()=>toggleTab(2)} className={toggleState === 2 ? "date active-date":"date"}>2016-2018</p>
                        <p onClick={()=>toggleTab(3)} className={toggleState === 3 ? "date active-date":"date"}>2015-2016</p>
                      </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8'>
                  <div className='tab-content'>
                    <div className={toggleState === 1 ? 'show-content' : 'content'}>
                      <h4>2018-2022</h4>
                      <hr style={{color:'#AD8BD0',borderWidth:'5px'}} />
                      <div className='details'>
                        <table>
                          <tr>
                            <td><span>Degree </span></td>
                            <td>:</td>  
                            <td>Bachelor of Engineering</td>
                          </tr>
                          <tr>
                            <td><span>Department </span></td> 
                            <td>:</td> 
                            <td>Automobile Engineering</td>
                          </tr>
                          <tr>
                            <td><span>College </span></td>
                            <td>:</td>  
                            <td>P.B.College Of Engineering, Sriperumbudur.</td>
                          </tr>
                         <tr>
                            <td><span>Cgpa </span> </td>  
                            <td>:</td> 
                            <td>8.3</td>
                          </tr>
                          <tr>
                            <td><span>Year Of Passing</span> </td>  
                            <td>:</td> 
                            <td>2022</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className={toggleState === 2 ? 'show-content' : 'content'}>
                      <h4>2016-2018</h4>
                      <hr style={{color:'#AD8BD0',borderWidth:'5px'}} />
                      <div className='details'>
                        <table>
                          <tr>
                            <td><span>Higher Seconadry </span></td>
                            <td>:</td>  
                            <td>12th</td>
                          </tr>
                          <tr>
                            <td><span>Department </span></td> 
                            <td>:</td> 
                            <td>Maths - Computer Science</td>
                          </tr>
                          <tr>
                            <td><span>SChool </span></td>
                            <td>:</td>  
                            <td>Thangamani.Matric.Hr.Sec.School, Pattabiram.</td>
                          </tr>
                         <tr>
                            <td><span>Percentage </span> </td>  
                            <td>:</td> 
                            <td>78.3</td>
                          </tr>
                          <tr>
                            <td><span>Year Of Passing</span> </td>  
                            <td>:</td> 
                            <td>2018</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className={toggleState === 3 ? 'show-content' : 'content'}>
                      <h4>2015-2016</h4>
                      <hr style={{color:'#AD8BD0',borderWidth:'5px'}} />
                      <div className='details'>
                        <table>
                          <tr>
                            <td><span>Matriculation</span></td>
                            <td>:</td>  
                            <td>10th</td>
                          </tr>
                          <tr>
                            <td><span>School </span></td>
                            <td>:</td>  
                            <td>St.Joseph's Matriculation School,Avadi.</td>
                          </tr>
                         <tr>
                            <td><span>Percentage </span> </td>  
                            <td>:</td> 
                            <td>87</td>
                          </tr>
                          <tr>
                            <td><span>Year Of Passing</span> </td>  
                            <td>:</td> 
                            <td>2016</td>
                          </tr>
                        </table>
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

export default Academic



