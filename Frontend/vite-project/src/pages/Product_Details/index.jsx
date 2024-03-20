import React from "react";
import Headers from "../../components/Headers/index";
import { useParams } from "react-router-dom";
import Hero_Section from "./Views/Hero_Section/hero";
import BottomTabs from "./Views/BottomTabs/index";
import Footer from "../../components/Footer";
function Product() {
  const param = useParams();
  return (
    <div>
      <Headers />
      <Hero_Section />
      <BottomTabs />
      <Footer />
    </div>
  );
}

export default Product;
