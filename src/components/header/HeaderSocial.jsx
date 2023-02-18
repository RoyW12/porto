import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a>
      <a href="https://www.instagram.com/_r_o_y_2_4_/" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
