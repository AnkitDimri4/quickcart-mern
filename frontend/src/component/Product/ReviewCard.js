import React from "react";
import { Rating } from "@mui/material";
import profilePng from "../../images/Profile.png";
import "./ReviewCard.css"; // optional, for styling

const ReviewCard = ({ review }) => {
  if (!review) return null; // safety check

  const options = {
    value: review?.rating || 0,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt={review?.name || "User"} />
      <p>{review?.name || "Anonymous"}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review?.comment || ""}</span>
    </div>
  );
};

export default ReviewCard;
