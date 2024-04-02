import React from "react";
import {useNavigate} from "react-router-dom";
function Dress() {
  const nav=useNavigate();
  const handler=()=>
  {
      nav("/casual");
  }
  return (
    <>
      <div className="w-full flex justify-center p-28">
        <div className="w-full rounded-3xl p-20 bg-[#F0F0F0] ">
          <div className="flex justify-center pb-20">
            <p className="text-5xl font-bold">BROWSE BY DRESS STYLE</p>
          </div>
          <div className="w-full flex justify-center">
            <div className=" justify-center ">
              <div className="flex pb-8 flex-wrap">
                <img onClick={handler}
                  className="lg:pr-8 pb-8    w-1/3 "
                  src="http://localhost:3000/Casual.png"
                ></img>
                <img
                  className="w-3/5"
                  src="http://localhost:3000/Formal.png"
                ></img>
              </div>

              <div className="flex flex-wrap">
                <img
                  className="lg:pr-8 pb-8     w-3/5  "
                  src="http://localhost:3000/Party.png"
                ></img>
                <img
                  className="w-1/3"
                  src="http://localhost:3000/Gym.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dress;
