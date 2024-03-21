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
        <div className="w-10/12 flex flex-wrap">
          {productData?.reviews?.map((item) => {
            if (item)
              return (
                <>
                  <div className="w-1/2 ">
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
            <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black ">
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
