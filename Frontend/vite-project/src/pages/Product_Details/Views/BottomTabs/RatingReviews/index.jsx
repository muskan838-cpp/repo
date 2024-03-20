import React from "react";
import Product_Reviews from "../../../../../components/Customers_Reviews/reviews";
import Products from "../../../../Home/Views/Products/products";
import { useState } from "react";

function Rating() {
  return (
    <div className="w-full mt-12">
      <div className="w-full flex justify-center mt-6">
        <div className="w-11/12 border rounded"></div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-11/12 flex flex-wrap">
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-1/2">
            <Product_Reviews />
          </div>
          <div className="w-full flex justify-center pt-12">
            <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black ">
              Large
            </button>
          </div>
        </div>
      </div>
      <Products title={"You Might Also Like"} />
    </div>
  );
}

export default Rating;
