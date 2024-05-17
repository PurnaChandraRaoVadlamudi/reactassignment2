import React from 'react'
import './contact.css' 

const Contact = () => {
  return (
    <>
    <div  name="Contact" className='form-container'>
        <form className='form'>
            <input className="input" type='name' placeholder='Name'/> <br/>
            <input  className="input" type='email' placeholder='Email'/><br/>
            <textarea   rows="8" cols="30" placeholder='Message'></textarea>
        </form>  
        <button className='btn'>Submit</button>  
    </div>
    </>
  )
}

export default Contact
