import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { Slider, Typography } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 1000000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => setCurrentPage(e);
  const priceHandler = (event, newPrice) => setPrice(newPrice);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword || "", currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  return (
    <Fragment>
      <MetaData title="PRODUCTS -- ECOMMERCE" />
      <h2 className="productsHeading">Products</h2>

      <div className="productsWrapper">
        {/* FILTER SIDEBAR */}
        <div className="filterBox">
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
          />

          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((cate) => (
              <li
                className="category-link"
                key={cate}
                onClick={() => {
                  setCategory(cate);
                  setCurrentPage(1); 
                }}
              >
                {cate}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">Ratings Above</Typography>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
                setCurrentPage(1);
              }}
              valueLabelDisplay="auto"
              min={0}
              max={5}
            />
          </fieldset>
        </div>

        {/* PRODUCTS CARD */}
        <div className="productsCard">
          {loading ? (
            <Loader />
          ) : (
            <div className="products">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PAGINATION */}
      {resultPerPage < filteredProductsCount && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={filteredProductsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Products;
