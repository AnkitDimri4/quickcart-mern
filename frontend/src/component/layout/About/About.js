import React from "react";
import "./aboutSection.css";
import { Typography, Avatar, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography variant="h3" component="h1" gutterBottom className="aboutTitle">
          About QuickCart
        </Typography>

        <div className="aboutCard">
          <Avatar
            src="../../../images/About.png"
            alt="Founder"
            sx={{ width: 160, height: 160, my: 2 }}
          />
          <Typography variant="h5">Ankit Dimri</Typography>
          <Typography variant="body1" textAlign="center" className="aboutDescription">
            QuickCart is a modern MERN-based e-commerce platform that allows users to explore, 
            add to cart, and purchase products easily. It features a seamless user experience, 
            fast performance, and reliable order management.
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" className="brandLinks">
            <a href="https://github.com/AnkitDimri4" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/ankit-dimri-a6ab98263" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/user4612MW/" target="_blank" rel="noreferrer">
              <CodeIcon />
            </a>
            <a href="https://portfolio-nine-orcin-33.vercel.app/" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default About;
