import React from "react";
import "./Section2.css";
import { useSelector } from "react-redux";
import Products1 from "./Products1.js";

export default function Section2() {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="section2-container">
      <div className="section2-header">
        <h3 className="section2-h3">
          <span className="underline"></span>
          <span className="section2-title">TRENDING</span>
          <span className="underline"></span>
        </h3>
        <span className="titleChild">Top view in this week</span>
      </div>

      <div className="section2-products">
        {products && products.map((product) => <Products1 product={product} key={product.name}/>)}
      </div>
    </div>
  );
}

// {products && products.map(product => (
//   <></>
// ))}
