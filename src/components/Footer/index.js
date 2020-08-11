import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a aria-label="Github Link" className="footer-links-github" href="https://github.com/MkDs17"><FaGithub /></a>
        <a aria-label="Twitter Link" className="footer-links-twitter" href="http://twitter.com/MkDesign14"><FaTwitter /></a>
        <a aria-label="LinkedIn Link" className="footer-links-linkedin" href="http://linkedin.com/in/mickael-rassicot"><FaLinkedin /></a>
      </div>
      <div className="footer-catch-phrase">
        Data provided by <a href="http://https://github.com/mathdroid/covid-19-api"> mathdroid</a> API
      </div>
    </div>
  );
};

export default Footer;
