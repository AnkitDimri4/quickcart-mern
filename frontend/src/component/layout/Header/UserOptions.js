import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dashboard = () => navigate("/admin/dashboard");
  const orders = () => navigate("/orders");
  const account = () => navigate("/account");
  const cart = () => navigate("/cart");

  const logoutUser = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          sx={{ color: cartItems.length > 0 ? "#ff9800" : "inherit" }}
        />
      ),
      name: `Cart (${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
    <Fragment>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 10,
          transition: "all 0.9s ease",
        }}
      />

      <SpeedDial
        ariaLabel="User Options"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        direction="down"
        className="speedDial"
        FabProps={{
          sx: {
            backgroundColor: "#fff",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            transition: "all 0.9s ease",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
            },
          },
        }}
        icon={
          <img
            className="speedDialIcon"
            src={user?.avatar?.url || "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600}
            FabProps={{
              sx: {
                transition: "all 0.25s ease",
                "&:hover": {
                  transform: "scale(1.34)",
                  backgroundColor: "#f5f5f5",
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
