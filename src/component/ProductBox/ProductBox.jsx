import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProductBox.scss";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


const ProductBox = ({ item }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(item);
  }, [item]);

  return (
    <NavLink to={`/product/${product.name}`} className="product_details_link">
      <div className="product_card">
        <img
          src={product.picture}
          alt={product.name}
          className="product_image"
        />
        <div className="product_info">
          <div className="rating">
          <Rating
            initialRating={product.rate}
            emptySymbol={<CiStar className="rate_emty"/>}
            fullSymbol={<FaStar className="rate_full"/>}
            readonly={true}
          />
          <span className="product_reviews">
           {product.number_reviews}  Reviews
          </span>
          </div>
          <h3 className="product_name">{product.name}</h3>
          <p className="product_sizes">
            Sizes: {product.sizes && product.sizes.join(", ")}
          </p>
          <p className="product_price">Price: ${product.price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductBox;
