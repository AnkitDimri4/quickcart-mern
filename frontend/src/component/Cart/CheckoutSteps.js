import React, { Fragment } from "react";
import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: "Shipping Details",
      icon: <LocalShippingIcon />,
    },
    {
      label: "Confirm Order",
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: "Payment",
      icon: <AccountBalanceIcon />,
    },
  ];

  return (
    <Fragment>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        sx={{
          width: "100%",
          margin: "30px auto 40px auto",
          padding: "3vmax 20px",
        }}
      >
        {steps.map((item, index) => (
          <Step key={index}>
            <StepLabel
              icon={item.icon}
              sx={{
                "& .MuiStepLabel-label": {
                  fontWeight: 600,
                  fontSize: "15px",
                  marginTop: "8px",
                  color: activeStep >= index ? "#ff5722" : "rgba(0,0,0,0.6)",
                },
                "& .MuiStepIcon-root": {
                  fontSize: "30px",
                  fontWeight: 600,
                  transition: "0.3s",
                  color: activeStep >= index ? "#ff5722" : "rgba(0,0,0,0.3)",
                },
              }}
            >
              <Typography>{item.label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
};

export default CheckoutSteps;
