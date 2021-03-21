import React, { useState } from 'react'; 
import axios from 'axios';
import './contact-form.css';

export const ContactForm = () => {
  const [data, setData] = useState({name: "", email: "", message: ""});


  const sendData = async () => {
    try {
      const API_BASE_URL = 'https://uzk3crusd9.execute-api.us-east-2.amazonaws.com/production/contact';
      const payload = {
        item: {
          id: Math.floor(Math.random() * (999999999 - 0 + 1)) + 999999999,
          name: data.name,
          email: data.email,
          message: data.message        
        }
      }
      const config = {
        method: 'POST',
        payload,
        url: API_BASE_URL
      }  
      const request = await axios(config)
      
      
      console.log(request)
    } catch(err) {
      console.error(err)
    }
  }


  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data)
    sendData()
  }

  return (
    <form onSubmit={handleSubmit}> 
      <h1>Contact Us</h1>
      <div className="row">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={data.name} placeholder="John Smith" onChange={handleChange} required />
      </div>
      <div className="row">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={data.email} placeholder="email" onChange={handleChange} required />
      </div>
      <div className="row">
        <label htmlFor="message">Message</label>
        <textarea type="textarea" name="message" value={data.message} placeholder="Leave a comment :)" onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

