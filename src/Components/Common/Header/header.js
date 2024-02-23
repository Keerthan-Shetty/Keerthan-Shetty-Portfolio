import React , {useState} from 'react'
import './header.css'
import { Container } from 'react-bootstrap'
import Logo from '../../../assets/Logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  const[navList, setNavList] = useState(false);
  return (
    <header>
        <Container className='d-flex justify-content-between align-items-center'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <div className="nav flex">
              <ul className={navList ? "small" : "flex"}>
                <li ><Link activeClass='active' to='profile' spy={true} smooth={true} offset={-100} duration={300} >Home</Link></li>
                <li><Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={300}>About</Link></li>
                <li><Link activeClass='active' to='academic' spy={true} smooth={true} offset={-100} duration={300}>Academics</Link></li>
                <li><Link activeClass='active' to='skills' spy={true} smooth={true} offset={-90} duration={300}>Skills</Link></li>
                <li><Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={300}>Projects</Link></li>
                <li><Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={300}>Contact</Link></li>
              </ul>
            </div>
            <div className='toggle'>
              <button onClick={() => setNavList(!navList)}>{ navList ? <i class="fa-solid fa-xmark"></i> : <i className='fa-solid fa-bars'></i>}</button>
            </div>
          </Container>
        </header>
   
  )
}

export default Header
