import "./App.css";
import Slide1 from "./images/Slide1.jpg";
import Slide2 from "./images/Slide2.jpg";
import Slide3 from "./images/Slide3.jpg";
import Navbar from "./components/Navbar/Navbar.js";
import Slider from "./components/Slider/Slider.js";
import ProductDetails from "./components/Product/ProductDetails.js"
import Products from "./components/Product/Products.js";
import Search from "./components/Navbar/Search.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { far, faUser } from "@fortawesome/free-regular-svg-icons";
import { getProduct } from "../src/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import LoginSignUp from "./components/User/LoginSignUp";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/Navbar/userOptions.js"
import Profile from "./components/User/Profile.js"
import ProtectedRoute from "./components/Route/ProtectedRoute"
import UpdateProfile from "./components/User/UpdateProfile.js"
import UpdatePassword from "./components/User/UpdatePassword.js"
import ForgotPassword from "./components/User/ForgotPassword.js"
import ResetPassword from "./components/User/ResetPassword.js"
import Cart from "./components/Cart/Cart.js"
import Shipping from "./components/Cart/Shipping.js"
import ConfirmOrder from "./components/Cart/ConfirmOrder"
import Payment from "./components/Cart/Payment"
import OrderSuccess from "./components/Cart/OrderSuccess.js"
import MyOrders from "./components/Order/MyOrders.js"
import OrderDetails from "./components/Order/OrderDetails.js"
import Dashboard from "./components/admin/Dashboard.js"
import ProductList from "./components/admin/ProductList.js"
import NewProduct from "./components/admin/NewProduct.js"
import UpdateProduct from "./components/admin/UpdateProduct.js"
import OrderList from "./components/admin/OrderList.js"
import ProcessOrder from "./components/admin/ProcessOrder.js"
import UsersList from "./components/admin/UsersList.js"
import UpdateUser from "./components/admin/UpdateUser.js"
import ProductReviews from "./components/admin/ProductReviews.js"
import { Elements, StripeProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

library.add(fab, far, faSearch, faUser, faShoppingBag, faBars);

const imgData = [{ image: Slide1 }, { image: Slide2 }, { image: Slide3 }];

function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    dispatch(loadUser());
    getStripeApiKey()
  }, [dispatch]);

  // let apiKey = stripeApiKey.toString();
  // const stripePromise = loadStripe(apiKey);

  return (
    <Router>
      <Navbar />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Slider slides={imgData} />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
        {isAuthenticated && (<Route exact path="/account" element={<Profile />} />)}
        {!isAuthenticated && (<Route exact path="/account" element={<LoginSignUp />} />)}
        {isAuthenticated && (<Route exact path="/me/update" element={<UpdateProfile />} />)}
        {isAuthenticated && (<Route exact path="/password/update" element={<UpdatePassword />} />)}
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/cart" element={<Cart />} />
        {isAuthenticated && (<Route exact path="/login/shipping" element={<Shipping />} />)}
        {isAuthenticated && (<Route exact path="/order/confirm" element={<ConfirmOrder />} />)}
        {stripeApiKey && <Route path="/process/payment" element={
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment />
          </Elements>
        } />}
        {isAuthenticated && (<Route exact path="/success" element={<OrderSuccess />} />)}
        {isAuthenticated && (<Route exact path="/orders" element={<MyOrders />} />)}
        {isAuthenticated && (<Route exact path="/order/:id" element={<OrderDetails />} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/dashboard" element={<Dashboard />} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/products" element={<ProductList/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/product" element={<NewProduct/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/product/:id" element={<UpdateProduct/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/orders" element={<OrderList/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/order/:id" element={<ProcessOrder/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/users" element={<UsersList/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/user/:id" element={<UpdateUser/>} />)}
        {isAuthenticated && user.role==="Admin" && (<Route exact path="/admin/reviews" element={<ProductReviews/>} />)}
      </Routes>

    </Router>
  );
}

export default App;

//<Slider slides={imgData} />
//{...props}
{/* <Route path="/process/payment" element={props => {
      <StripeProvider>
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment/>
        </Elements>
        </StripeProvider>
}} /> */}
