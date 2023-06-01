import React from "react";
import "./Products1.css"
import { Link } from "react-router-dom";

const Products1 = ({ product }) => {
  //working
  const photo = require(`../../images/${product.images[0].public_id}.jpg`);
  //const photo = require(`${product.images[0].url}`);
  //const photo = (`../../images/${product.images[0].public_id}.jpg`);
  //console.log(photo);
  //<img className="img-A img-0" src={photo} alt="" />
  return (
    <Link className="section2-productCard" to={`/product/${product._id}`}>
    <div className="productsSec2">
      <div className="images-container">
      <img className="img-active w-1" src={photo} alt={product.name}/>
      <img className="img-0 w-1" src={require(`../../images/${product.images[0].public_id}.jpg`)} alt="hello" />
      </div>
      <div className="desc">
        <h4 className="productName">{product.name}</h4>
        <span className="productPrice">${product.price}</span>
      </div>
    </div>
    </Link>
  );
};

export default Products1;