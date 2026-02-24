import React from "react";
import "./Contact.css";
import { Button, Typography, Box, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";

const Contact = () => {
  return (
    <Box className="contactContainer">
      <Box className="contactCard">
        <Typography variant="h3" className="contactTitle" gutterBottom>
          Get in Touch
        </Typography>

        <Typography variant="body1" className="contactDescription" gutterBottom>
          Have questions, collaboration ideas, or project inquiries? QuickCart's team is always 
          happy to connect and discuss opportunities.
        </Typography>

        <Button
          className="contactButton"
          href="mailto:ankitdimri4@gmail.com"
        >
          Email: ankitdimri4@gmail.com
        </Button>

        <Stack direction="row" spacing={2} className="contactLinks">
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
      </Box>
    </Box>
  );
};

export default Contact;
