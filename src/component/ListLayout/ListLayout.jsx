// src/components/ListLayout/ListLayout.js
import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import './ListLayout.scss'

const ListLayout = ({ products }) => {
  return (
    <div className="list_Layout">
      {products?.map((item, index) => (
        <ProductBox
          item={item}
          key={index}
        />
      ))}
    </div>
  );
};

export default ListLayout;
