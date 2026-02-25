import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct("", 1, [0, 1000000], "", 0));
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="QuickCart" />

          {/* Banner */}
          <div className="banner">
            {!isAuthenticated && (
              <div className="loginButtonWrapper">
                <Link to="/login">
                  <button className="loginButton">Login</button>
                </Link>
              </div>
            )}

            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          {/* Featured Products */}
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

