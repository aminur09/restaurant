import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">207 S Main St, Greenville, SC 29607, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='#'><FiFacebook /></a>
          <a href='#'><FiTwitter /></a>
          <a href='#'><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">05:00 PM - 10:00 PM</p>
        <p className="p__opensans">Sunday:</p>
        <p className="p__opensans">11:00 AM - 09:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
