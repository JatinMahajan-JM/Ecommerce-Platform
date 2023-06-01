import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav>
        <div className="nav-center">
          <button className="menu">
            <FontAwesomeIcon icon="bars" color="black" />
          </button>

          <div className="nav-header">
            <p>kalles</p>
          </div>

          <ul className="links">
            <li className="hover1 blocks">
              <a href="" className="title demo">Demo</a>
              <div className="sub-menu">
                <div className="container">
                  <div className="c1-m1 column" style={{position: "absolute",left: "0%"}}>
                    <a href="">Homepages</a>
                    <ul className="sub-column">
                      <li>Home Default</li>
                      <li>Home Classic</li>
                      <li>Home Video Banner</li>
                      <li>Home categories link</li>
                      <li>Home static image</li>
                      <li>Home metro</li>
                    </ul>
                  </div>

                  <div className="c1-m2 column" style={{position: "absolute",left: "25%"}}>
                    <a href="">Homepages</a>
                    <ul className="sub-column">
                      <li>Home Default</li>
                      <li>Home Classic</li>
                      <li>Home Video Banner</li>
                      <li>Home categories link</li>
                      <li>Home static image</li>
                      <li>Home metro</li>
                    </ul>
                  </div>

                  <div className="c1-m3 column" style={{position: "absolute",left: "50%"}}>
                    <a href="">Homepages</a>
                    <ul className="sub-column">
                      <li>Home Default</li>
                      <li>Home Classic</li>
                      <li>Home Video Banner</li>
                      <li>Home categories link</li>
                      <li>Home static image</li>
                      <li>Home metro</li>
                    </ul>
                  </div>

                  <div className="c1-m4 column" style={{position: "absolute",left: "75%"}}>
                    <a href="">Homepages</a>
                    <ul className="sub-column">
                      <li>Home Default</li>
                      <li>Home Classic</li>
                      <li>Home Video Banner</li>
                      <li>Home categories link</li>
                      <li>Home static image</li>
                      <li>Home metro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="hover-2 blocks">
              <a href="" className="title shop">Shop</a>
            </li>
            <li className="hover-3 blocks">
              <a href="" className="title">Product</a>
            </li>
            <li className="hover-4 blocks">
              <a href="" className="title">Sale</a>
            </li>
            <li className="hover-5 blocks">
              <a href="" className="title">Portfolio</a>
            </li>
            <li className="hover-6 blocks">
              <a href="" className="title">Lookbook</a>
            </li>
            <li className="hover-7 blocks">
              <a href="" className="title">Blog</a>
            </li>
          </ul>

          <ul className="icons">
            <li>
            <Link to="/search">
              
                <FontAwesomeIcon icon="search" color="black" />
             
            </Link>
            </li>
            <li>
            <Link to="/login" className="user" >
              
                <FontAwesomeIcon icon={["far", "user"]} color="black" />
              
            </Link>
            </li>
            <li>
              <Link to="/cart">
              
                <FontAwesomeIcon icon="shopping-bag" color="black" />
              
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        {/* <div className="slider-container">
          <div className="slide">
            <img src="../images/Slide1.jpg" alt="" />
          </div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div> */}
      </nav>
    </Fragment>
  );
}

export default Navbar;
