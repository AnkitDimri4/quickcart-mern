import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./CartItemCard.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div className="CartItemCard">
      <div
        className="imageWrapper"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
      >
        <img
          src={item.image}
          alt={item.name || "Product Image"}
          className="CartItemCardImage"
        />

        {showZoom && (
          <div
            className="zoomBox"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: backgroundPosition,
            }}
          />
        )}
      </div>

      <div className="CartItemCardDetails">
        <Link to={`/product/${item.product}`} className="CartItemCardLink">
          {item.name}
        </Link>

        <span className="CartItemCardPrice">
          Price: ₹{item.price}
        </span>

        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => deleteCartItems(item.product)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
