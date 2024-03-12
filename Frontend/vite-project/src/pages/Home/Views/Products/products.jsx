import React from "react";
import black_tshirt from "../../../../Assets/Black_tshirt.png";
import shirt from "../../../../Assets/Shirt.png";
import Orange_tshirt from "../../../../Assets/Orange_tshirt.png";
import pent from "../../../../Assets/pent.png";

function Products(props) {
  return (
    <>
      <div className="pt-20">
        <div className="w-11/12 justify-center flex ml-20">
          <h1 className="text-5xl font-bold">{props.title}</h1>
        </div>

        <div className="w-full flex justify-center ">
          <div className="flex w-5/6 justify-around mt-20 flex-wrap">
            <div>
              <div>
                <img className="rounded-3xl" src={black_tshirt}></img>
              </div>
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <p>$120</p>
            </div>

            <div>
              <div>
                <img src={shirt}></img>
              </div>
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <p>$120</p>
            </div>

            <div>
              <div>
                <img src={Orange_tshirt}></img>
              </div>
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <p>$120</p>
            </div>

            <div>
              <div>
                <img className="rounded-3xl" src={pent}></img>
              </div>
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <p>$120</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          {" "}
          <button className="bg-white w-1/12 h-12 mt-12 rounded-3xl text-black border">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
