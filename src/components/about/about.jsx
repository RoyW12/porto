import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>none</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h5>Clients</h5>
              <small>none</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Experience</h5>
              <small>none</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            voluptatem corrupti adipisci id architecto. Vitae cum magni
            repellendus, deleniti inventore quis dicta tempore qui reprehenderit
            consequuntur vero dolorum temporibus iusto.
          </p>
          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
