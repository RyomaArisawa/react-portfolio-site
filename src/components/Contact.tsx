import React from 'react';
import '../styles/Contact.css';

export const Contact: React.VFC = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-contents">
          <h2>Contact to Me!</h2>
          <p className="description">ご連絡お待ちしてます！</p>
          <a href="https://twitter.com/kusakab62617478" className="btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
