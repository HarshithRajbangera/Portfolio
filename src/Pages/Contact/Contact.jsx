import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-class">
        <div className="contact-details">
          <h1>Contact Details</h1>
          <div className="contact-content">
            <p><strong>Email: </strong>meharshithraj13@gmail.com</p>
            <p><strong>Ph-no: </strong>+916366036801</p>
            <p><strong>Github: </strong>
              <a href="https://github.com/HarshithRajbangera" target='_blank'>
                github.com/HarshithRajbangera
              </a>
            </p>
            <p><strong>LinkedIn: </strong>
              <a href="https://www.linkedin.com/in/harshithraj2004/" target='_blank' >
                linkedin.com/in/harshithraj2004
              </a>
            </p>
            <p><strong>Address: </strong>Kallagudde house, College Road, Bantwal - 574211</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
