import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Logo1.png";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const searchTime = 2;
  const cartTime = searchTime + 0.5;
  const profileTime = cartTime + 0.5;

  const options = {
    burgerColorHover: "#140b67b3",
    burgerSize: "15px",
    logo,
    logoWidth: "18vmax",
    navColor1: "#f0f0f5",
    
    logoHoverSize: "30px",
    logoHoverColor: "#1a237e",
    link1Text: ( <> <HomeIcon  fontSize="inherit" />  Home </> ),
    link2Text: ( <> <ShoppingBagIcon  fontSize="inherit" />  Products </> ),
    link3Text: ( <> <ContactMailIcon  fontSize="inherit" />  Contact </> ),
    link4Text: ( <> <InfoIcon  fontSize="inherit" />  About </> ),
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",

    searchIcon: true,
    SearchIconElement: SearchIcon,

    cartIcon: true,
    CartIconElement: ShoppingCartIcon,

    profileIcon: true,
    ProfileIconElement: AccountCircleIcon,

    link1Color: "#a39dcadb",
    link1Size: "1.8vmax",
    link2Size: "1.5vmax",
    link3Size: "1.5vmax",
    link4Size: "1.5vmax",
    link1HoverSize: "60px",
    link2HoverSize: "60px",
    link3HoverSize: "60px",
    link4HoverSize: "60px",
    link1ColorHover: "#21126bfc",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1Margin: "1vmax",
    profileIconUrl: isAuthenticated ? "/account" : "/login",
    profileIconColor: "#333",
    searchIconColor: "#333",
    cartIconColor: "#333",
    profileIconColorHover: "#ffb300",
    searchIconColorHover: "#ffb300",
    cartIconColorHover: "#ffb300",
    cartIconMargin: "4.5vmax",
    searchIconSize: "medium",
    cartIconSize: "medium",
    profileIconSize: "medium",

    searchIconAnimationTime: searchTime,
    cartIconAnimationTime: cartTime,
    profileIconAnimationTime: profileTime,
  
  };

  return <ReactNavbar {...options} />;
};

export default Header;
