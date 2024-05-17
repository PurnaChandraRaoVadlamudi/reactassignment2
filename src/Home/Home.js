import React from 'react'
import {Link} from 'react-scroll'
import "./home.css"
const Home = () => {
  return (
    <>
    <div className='container'>
        <img  className='image' src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Restaurant'/>
``
        <ul className='btns'>
          <Link activeClass="active" to="Menu" spy={true} smooth={true} offset={50} duration={500}><button className='buttons'>Our Menu</button></Link>
          <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500}><button className='buttons'>Contact Us</button></Link>
          <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}><button className='buttons'>About Us</button></Link>
        </ul>
        
    </div>
    </>
  )
}

export default Home
