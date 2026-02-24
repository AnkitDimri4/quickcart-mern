import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { useEffect, useState } from "react";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";

import axios from "./axios";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store";
import { loadUser } from "./actions/userAction";

import Header from "./component/layout/Header/Header";
import Footer from "./component/layout/Footer/Footer";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";

import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";

import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
// import AdminLayout from "./component/Admin/AdminLayout"; 

import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    WebFont.load({
      google: { families: ["Roboto", "Droid Sans", "Chilanka"] },
    });

    store.dispatch(loadUser());
    getStripeApiKey();

    const handleContextMenu = (e) => e.preventDefault();
    window.addEventListener("contextmenu", handleContextMenu);
    return () => window.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const getStripeApiKey = async () => {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey", {
        withCredentials: true,
      });
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      toast.error("Stripe API key fetch failed");
    }
  };

  const stripePromise = stripeApiKey ? loadStripe(stripeApiKey) : null;

  return (
    <>      
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      {/* <ToastContainer position="top-right" /> */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Routes */}
        <Route path="/account" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/me/update" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path="/password/update" element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
        <Route path="/shipping" element={<ProtectedRoute><Shipping /></ProtectedRoute>} />
        <Route path="/order/confirm" element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
        <Route path="/order/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />

        {stripePromise && (
          <Route path="/process/payment" element={   <ProtectedRoute> <Elements stripe={stripePromise}>   <Payment /> </Elements>   </ProtectedRoute> }/>
        )}
        {/* {stripePromise && ( <Elements stripe={stripePromise}> <Routes><Route path="/process/payment" element={   <ProtectedRoute>     <Payment />   </ProtectedRoute>  }/></Routes> </Elements> )} */}
        {/* <Route path="/process/payment" element={ <ProtectedRoute>   <Elements stripe={stripePromise}>     <Payment /> </Elements> </ProtectedRoute>}/> */}

        <Route path="/success" element={<ProtectedRoute>  <OrderSuccess /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute isAdmin><ProductList /></ProtectedRoute>} />
        <Route path="/admin/product" element={<ProtectedRoute isAdmin><NewProduct /></ProtectedRoute>} />
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin><UpdateProduct /></ProtectedRoute>} />
        <Route path="/admin/orders" element={<ProtectedRoute isAdmin><OrderList /></ProtectedRoute>} />
        <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin><ProcessOrder /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute isAdmin><UsersList /></ProtectedRoute>} />
        <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin><UpdateUser /></ProtectedRoute>} />
        <Route path="/admin/reviews" element={<ProtectedRoute isAdmin><ProductReviews /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* {location.pathname === "/" && <Footer />} */}
      {["/", "/products"].includes(location.pathname) && <Footer />}
      </>

  );
}

export default App;
