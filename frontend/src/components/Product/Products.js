import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../actions/productAction";
import Products1 from "../Section2/Products1";
import Pagination from "react-js-pagination";
import { Slider, Typography }from "@mui/material"
import "./Product.css"

const categories = ["Camera", "SmartPhones", "Tops", "Attire", "Sweaters", "Clothes" , "Lower"];

const Products = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0); 
  const { products, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  }

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  }

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  return (
    <Fragment>
      <Fragment>
        <h2 className="productsHeading">Products</h2>
        <div className="Products">
          {products &&
            products.map((product) => (
              <Products1 className="div-products" key={product._id} product={product} />
            ))}
        </div>

        <div className="fiterBox">
          <Typography>Price</Typography>
          <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={100} />

          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li className="category-link"
              key={category}
              onClick={() => setCategory(category)}> 
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">Ratings above</Typography>
            <Slider 
            value={ratings}
            onChange= {(e, newRating) => {
              setRatings(newRating)
            }}
            aria-labelledby= "continuous-slider"
            min={0}
            max={5}
            valueLabelDisplay= "auto" />
          </fieldset>
        </div>

        {resultPerPage < productsCount && (
          <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
        )}
      </Fragment>
    </Fragment>
  );
};

export default Products;