import React,{useRef} from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
const Contact = () => {
  const form = useRef();
  const [sent,setSent] = useState(false)
  const [message,setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a4ci44a', 'template_91f5a4l', form.current, '7BFl7WD1FHWce_aYb')
      .then((result) => {
          setMessage("Sending....")
          form.current.reset();
          setSent(true);
          setMessage("Thank You Friend")
          

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>Lets Connect and Work Together.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} onClick={e => {window.location.href = "https://www.linkedin.com/in/vignesh-g-690063276/";}}>
              {socialIcon}
            </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form}>
          <div className="row">
            <input type="text" placeholder='First Name' name="first_name" />
            <input type="text" placeholder='Last name' name="last_name" />
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' name="phone_no" />
            <input type="email" placeholder='Email' name="user_email" />
          </div>
          <div className="row">
            <textarea placeholder='message' name="message" ></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a type="submit" href="#" onClick={sendEmail}>Send</a>           
          </motion.div>
          {sent && <p style={{fontStyle:"bold",paddingTop:"10px"}}>{message}</p>} 
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact