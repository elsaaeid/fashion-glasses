import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AllGlasses from "../pages/AllGlasses";
import GlassesDetails from "../pages/GlassesDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<Home />} />
      <Route path="/glasses" element={<AllGlasses />} />
      <Route path="/glasses/:id" element={<GlassesDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
