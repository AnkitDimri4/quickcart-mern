import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./orderSuccess.css";

const OrderSuccess = () => {
  return (
    <Box
      className="orderSuccess"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: "green", mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Your Order has been Placed Successfully
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/orders"
      >
        View Orders
      </Button>
    </Box>
  );
};

export default OrderSuccess;
