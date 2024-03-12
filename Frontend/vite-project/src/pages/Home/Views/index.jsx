import Header from "../Views/Header/header";
import Hero_Section from "../Views/Hero_Section/hero"
import Products from "./Products/products";
import React from 'react'

function Home_View() {
  return (
    <div>
      <Header/>
      <Hero_Section/>
      <Products title="New Arrivals"/>
      <Products title="Top Selling"/>
    </div>
  )
}

export default Home_View
