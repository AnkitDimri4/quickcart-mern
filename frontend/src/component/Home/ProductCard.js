import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  // Rating options
  const options = {
    value: product.ratings || 0,
    readOnly: true,
    precision: 0.5,
    size: "small",
    name: `rating-${product._id}`,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img 
        src={product.images && product.images[0]?.url} 
        alt={product.name} 
        loading="lazy" 
      />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />
        <span className="productCardSpan">
          ({product.numOfReviews || 0} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
