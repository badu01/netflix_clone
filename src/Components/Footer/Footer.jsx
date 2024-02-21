import React from "react";
import "./Footer.css";
import "../../Assets/Icons/Figma.svg"
import "../../Assets/Icons/GitHub.svg"
import "../../Assets/Icons/Instagram.svg"
import "../../Assets/Icons/Portfolio.svg"
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="hi">
          <div className="overlap">
            <div className="text-wrapper">HI👋</div>
            <div className="name-content">
              <div className="overlap-group">
                <div className="div">I am Badusha</div>
                <p className="p">Student at Govt Engineering College, Thrissur</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-wrapper-2">
          This is Netflix clone application created for education purpose only.
          <br />
          Contents are from TMBD
        </p>
        <div className="text-wrapper-2">Find Project 👉 <span>GitHub</span></div>
      </div>
      <div className="connect-me">
        <p className="find-me-on">
          <span className="span">Find me on</span>
          <span className="text-wrapper-3"> 🔍</span>
        </p>
        <div className="github-link">
          <div className="git-hub">Git Hub</div>
          <img className="img" alt="Git hub" src="../../Assets/Icons/GitHub.svg" />
        </div>
        <img className="line" alt="Line" src="line-73.svg" />
        <div className="portfolio-link">
          <div className="text-wrapper-4">Portfolio</div>
          <img className="img-2" alt="Portfolio" src="portfolio.svg" />
        </div>
        <img className="line" alt="Line" src="line-75.svg" />
        <div className="figma-link">
          <div className="figma"> Figma</div>
          <img className="figma-2" alt="Figma" src="figma.svg" />
        </div>
        <img className="line" alt="Line" src="line-74.svg" />
        <div className="instagram-link">
          <div className="text-wrapper-4">Instagram</div>
          <img className="img-2" alt="Instagram" src="instagram.svg" />
        </div>
      </div>
    </div>
  );
};
