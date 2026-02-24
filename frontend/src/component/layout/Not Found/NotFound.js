import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography, Button, Box } from "@mui/material"; // added Box for layout
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Box
      className="PageNotFound"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
      gap={3}
    >
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "red" }} />

      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
