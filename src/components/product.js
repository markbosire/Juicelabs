import React from "react";
import "../index.css";

const ProductCard = ({ imageURL, name, price, color }) => {
  return (
    <div className="product-card">
      <div className="image-container" style={{ backgroundColor: color }}>
        <div className="imageContain">
          <img src={imageURL} alt={name} />
        </div>
      </div>
      <div className="info-container">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
