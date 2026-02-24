import React from "react";
import { FaGithub, FaCode, FaFreeCodeCamp, FaLinkedin, FaEnvelope, FaHackerrank } from "react-icons/fa";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* Left Section: App Download */}
      <div className="leftFooter">
        <h4>Download QuickCart App</h4>
        <p>Get it for Android and iOS mobile phones</p>
        <img src={playStore} alt="Play Store" />
        <img src={appStore} alt="App Store" />
      </div>

      {/* Middle Section: Branding */}
      <div className="midFooter">
        <h1>QuickCart</h1>
        <p>Fast, Reliable, and Easy Shopping</p>
        <span className="copyright">
             © 2026 <a href="https://portfolio-nine-orcin-33.vercel.app/" target="_blank" rel="noreferrer">Ankit Dimri</a>. All Rights Reserved
        </span>
      </div>

      {/* Right Section: Social Links */}
      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.freecodecamp.org/certification/ankitdimri/responsive-web-design" target="_blank" rel="noreferrer"><FaFreeCodeCamp /> FreeCodeCamp</a>
        <a href="https://github.com/AnkitDimri4" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <a href="https://leetcode.com/u/user4612MW/" target="_blank" rel="noreferrer"><FaCode /> LeetCode</a>
        <a href="https://linkedin.com/in/ankit-dimri-a6ab98263" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://www.hackerrank.com/certificates/298d6262809d" target="_blank" rel="noreferrer"><FaHackerrank /> HackerRank</a>
        <a href="mailto:ankit.dimri@example.com"><FaEnvelope /> Email Me</a>
      </div>
    </footer>
  );
};

export default Footer;
