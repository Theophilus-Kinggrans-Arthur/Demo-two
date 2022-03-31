import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clents</h5>
              <small>200+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            culpa quibusdam tempore nulla pariatur adipisci optio enim
            repellendus consectetur, assumenda vitae dolores illum reprehenderit
            explicabo deleniti ratione corporis autem molestiae?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
