import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg.jpg";
import IMG2 from "../../assets/portfolio2.jpg.jpg";
import IMG3 from "../../assets/portfolio3.jpg.jpg";
import IMG4 from "../../assets/portfolio4.jpg.jpg";
import IMG5 from "../../assets/portfolio5.jpg.jpg";
import IMG6 from "../../assets/portfolio5.jpg.jpg";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Portfolio Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG2} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG3} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG4} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG5} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG6} alt="" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
