import Header from "../Views/Header/header";
import Hero_Section from "../Views/Hero_Section/hero";
import Products from "./Products/products";
import React from "react";
import Top_Selling from "./Top_Selling/index";
import Dress_Style from "./Dress_Style/dress";
import Customers_Reviews from "./Customers_Reviews/index";
import Footer from "./Footer/index";
function Home_View() {
  return (
    <div>
      <Header />
      <Hero_Section />
      <Products title="New Arrivals" />
      <Top_Selling />
      <Dress_Style />
      <Customers_Reviews />
      <Footer />
    </div>
  );
}

export default Home_View;
