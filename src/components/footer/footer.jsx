import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Roy
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="permalinks">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/_r_o_y_2_4_/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Roy Pengangguran. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
