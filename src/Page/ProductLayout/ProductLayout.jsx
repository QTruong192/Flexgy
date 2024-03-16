import React from "react";
import "./ProductLayout.scss";
import ProductBox from "../../component/ProductBox/ProductBox";

const ProductLayout = ({ products }) => {
  return (
    <div className="product_layout">
      {products?.map((item, index) => (
        <ProductBox item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductLayout;
