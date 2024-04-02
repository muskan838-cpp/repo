import React from "react";
import LeftCart from "../LeftCart/index";
import RightCart from "../RightCart/index";

function hero() {
  return (
    <>
      <div className="w-full flex justify-center mt-3">
        <div className="w-10/12 ">
          <p className="text-4xl font-bold">Your Cart</p>

          <div className="lg:flex mt-5">
            <div className="lg:w-3/5 w-full">
              <LeftCart />
            </div>
            <div className="lg:w-2/5 lg:pl-9 w-full lg:mt-0 mt-6">
              <RightCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
