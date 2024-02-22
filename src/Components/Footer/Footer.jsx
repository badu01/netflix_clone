import React from "react";
import "./Footer.css";

import GitHub from "../../Icon/GitHub";
import Figma from "../../Icon/Figma";
import Portfolio from "../../Icon/Portfolio";
import Instagram from "../../Icon/Instagram";
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left">
                    <h1 className="Hi">Hi👋</h1>
                    <h1 className="name">I am Badusha</h1>
                    <p>Studend at Govt Engineering College,Thrissur</p>
                    <p style={{ marginTop: '20px' }}>
                        This is Netflix clone application created for education purpose only.
                        <br />
                        Contents are from TMBD
                    </p>
                    <div className="gitLink">Find Project 👉 <span className="GitHubLink"><a href="https://github.com/badu01/netflix_clone.git">GitHub</a></span></div>
                </div>
            </div>
            <div className="connect-me">
                <h1 className="right_heading">Find me on 🔍</h1>
                <div className="footer_links">
                    <GitHub/>
                    <a href="https://github.com/badu01"><p>GitHub</p></a>
                </div>
                <div className="footer_links">
                    <Figma/>
                    <a href="https://figma.com/@badushapareed"><p>Figma</p></a>
                </div>
                <div className="footer_links">
                    <Portfolio/>
                    <a href="https://badu01.github.io/MyFolio/"><p>Portfolio</p></a>
                </div>
                <div className="footer_links">
                    <Instagram/>
                    <a href="https://www.instagram.com/b.a.d.u._/?igsh=ZmM5bDgzNHBwMWY%3D"><p>Instagram</p></a>
                </div>
            </div>
        </div>
    );
};
