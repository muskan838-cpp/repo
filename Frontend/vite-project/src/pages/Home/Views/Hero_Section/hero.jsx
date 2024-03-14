import React from "react";
import back from "../../../../Assets/main.jpeg";
import star from "../../../../Assets/Star.png";
import Calvin from "../../../../Assets/Calvin.png";
import Zara from "../../../../Assets/Zara.png";
import Versace from "../../../../Assets/Versace.png";
import Prada from "../../../../Assets/Parada.png";
import Gucci from "../../../../Assets/Gucci.png";

function hero() {
  return (
    <>
      <div className=" bg-[#F2F1F0] w-screen lg:flex block">
        <div className="lg:w-1/2 w-screen lg:pl-48 pl-12 pt-14 sm:w-screen">
          <div className="w-2/3 ">
            <div className="w-full text-6xl font-extrabold leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </div>
            <div className="text-gray-600 text-base leading-6 mt-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <button className="bg-black w-1/3 h-12 mt-12 rounded-3xl text-white">
              Shop Now
            </button>

            <div className="w-full lg:flex-nowrap flex mt-14 pb-24 flex-wrap">
              <div className="pl-5 pr-5">
                <h1 className="text-4xl font-bold">200+</h1>
                <p className="text-gray-600">International Brands</p>
              </div>

              <div className="pl-3 pr-3">
                <h1 className="text-4xl font-bold">2,000+</h1>
                <p className="text-gray-600">High-Quality Products</p>
              </div>

              <div className="pl-3 pr-3">
                <h1 className="text-4xl font-bold">30,000+</h1>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex mt-20 relative">
          <img src={star} className=" w-1/12 h-1/12 absolute top-64"></img>

          <img
            src={back}
            className="lg:w-8/12 lg:ml-6 lg:h-11/12 w-[900px]"
          ></img>

          <img
            src={star}
            className=" w-1/6 h-1/5 flex items-center absolute right-48 "
          ></img>
        </div>
      </div>
      <div className="bg-black w-full pl-28 pt-10 flex justify-center">
        <div className="w-11/12 justify-around lg:flex-nowrap flex">
          <img src={Versace} className="w-1/12 h-1/2"></img>
          <img src={Zara} className="w-1/12 h-1/2"></img>
          <img src={Gucci} className="w-1/12 h-1/2"></img>
          <img src={Prada} className="w-1/12 h-1/2"></img>
          <img src={Calvin} className="w-2/12 h-1/2"></img>
        </div>
      </div>
    </>
  );
}

export default hero;
