import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "../../images/Logo1.png";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Sidebar = () => {
  const navigate = useNavigate();
  const [productsOpen, setProductsOpen] = useState(false);

  const handleProductsClick = () => {
    setProductsOpen(!productsOpen);
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="QuickCart Logo" className="sidebarLogo" />
      </Link>

      {/* Dashboard */}
      <List>
        <ListItemButton onClick={() => navigate("/admin/dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        {/* Products Menu */}
        <ListItemButton onClick={handleProductsClick}>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {productsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={productsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/admin/products")}
            >
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="All Products" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => navigate("/admin/product")}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Create Product" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Orders */}
        <ListItemButton onClick={() => navigate("/admin/orders")}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        {/* Users */}
        <ListItemButton onClick={() => navigate("/admin/users")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        {/* Reviews */}
        <ListItemButton onClick={() => navigate("/admin/reviews")}>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;

