import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p><span>Thank You</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} onClick={e => {window.location.href = "https://www.linkedin.com/in/vignesh-g-690063276/";}}>
                {socialIcon}
              </div>
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default Footer