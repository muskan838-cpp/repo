import React, { useEffect } from "react";
import Product_Reviews from "../../../../../components/Product_Reviews/reviews";
import Products from "../../../../Home/Views/Products/products";
import { useState } from "react";
import { useContext } from "react";
import MyContext from "../../../../../context/reviewsContext";
function Rating() {
  const productData = useContext(MyContext);
  console.log(productData);

  return (
    <div className="w-full mt-12">
      <div className="w-full flex justify-center mt-6">
        <div className="w-11/12 border rounded"></div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-11/12 lg:flex lg:flex-wrap">
          {productData?.reviews?.map((item) => {
            if (item)
              return (
                <>
                  <div className="lg:w-1/2 w-full">
                    <Product_Reviews
                      name={item?.name}
                      review={item?.review}
                      posted={item?.posted}
                      rating={item?.Rating}
                    />
                  </div>
                </>
              );
          })}

          <div className="w-full flex justify-center pt-12">
            <button className="mr-3 text-base p-3 lg:w-1/6 w-1/2 rounded-full bg-[#F0F0F0] text-black ">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
      <Products title={"You Might Also Like"} />
    </div>
  );
}

export default Rating;
