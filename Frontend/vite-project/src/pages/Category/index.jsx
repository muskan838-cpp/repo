import React, { useState } from "react";
import Headers from "../../components/Headers/index";
import Footer from "../../components/Footer/index";
import HeroSection from "./views/HeroSection/index";

export default function Index() {
  return (
    <>
      <Headers />

      <HeroSection />
      <Footer />
    </>
  );
}
