import React from "react";

function Dress() {
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="w-5/6 rounded-3xl p-20 bg-[#F0F0F0] ">
          <div className="flex justify-center pb-20">
            <p className="text-5xl font-bold">BROWSE BY DRESS STYLE</p>
          </div>
          <div className="w-full flex justify-center">
            <div className=" justify-center ">
              <div className="flex pb-8 flex-wrap">
                <img
                  className="lg:pr-8 pb-8 "
                  src="http://localhost:3000/Casual.png"
                ></img>
                <img
                  
                  src="http://localhost:3000/Formal.png"
                ></img>
              </div>

              <div className="flex flex-wrap">
                <img
                  className="lg:pr-8 pb-8       "
                  src="http://localhost:3000/Party.png"
                ></img>
                <img src="http://localhost:3000/Gym.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dress;
