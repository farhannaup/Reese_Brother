import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__teko">8089 Hartford Drive Chelsea, MA 02150</p>
        <p className="p__teko">+1 234-567-8900</p>
        <p className="p__teko">+1 432-765-8900</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.reese} alt="footer_logo" />
        <p className="p__shadows">&quot;I followed my heart, it led me to the bar.&quot;</p>
        <img src={images.icon} className="beer__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__teko">Monday-Friday:</p>
        <p className="p__teko">08:00 am - 12:00 am</p>
        <p className="p__teko">Saturday-Sunday:</p>
        <p className="p__teko">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__teko">2022 REESE BROTHERS. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
