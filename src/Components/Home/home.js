import React from 'react'
import Header from '../Common/Header/header'
import Profile from './Profile/profile'
import About from './About/about'
import Academic from './Academics/academic'
import Skill from './Skills/skill'
import Project from './Project/project'
import Contact from './Contact/contact'
import Footer from '../Common/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
  return (
    <div>
        <Header/>
        <Profile/>
        <About />
        <Academic/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;
