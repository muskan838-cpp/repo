import React from "react";
import back from "../../../../Assets/main.jpeg";
function hero() {
  return (
    <>
      <div className=" bg-[#F2F1F0] w-screen flex">
        <div className="w-1/2   pl-48 pt-14">
          <div className=" w-2/3">
            <div className="w-full text-6xl font-extrabold leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </div>
            <div className="text-gray-600 text-base leading-6 mt-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <button className="bg-black w-44 h-12 mt-12 rounded-3xl text-white">
              Shop Now
            </button>

            <div className="flex mt-14 pb-28">
              <div className="w-1/3">
                <h1 className="text-4xl font-bold">200+</h1>
                <p className="text-gray-600">International Brands</p>
              </div>

              <div className="w-1/3">
                <h1 className="text-4xl font-bold">2,000+</h1>
                <p className="text-gray-600">High-Quality Products</p>
              </div>

              <div className="w-1/3">
                <h1 className="text-4xl font-bold">30,000+</h1>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img src={back} className="w-[650px] ml-6"></img>
        </div>
      </div>
    </>
  );
}

export default hero;
