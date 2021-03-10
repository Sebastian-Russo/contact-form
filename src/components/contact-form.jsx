import React, { useState } from 'react'; 
import './contact-form.css';

export const ContactForm = () => {
  const [data, setData] = useState({name: "", email: "", message: ""});


  // name, an email, and a message
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data)
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

