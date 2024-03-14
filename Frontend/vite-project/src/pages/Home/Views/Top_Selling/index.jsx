import React, { useEffect, useState } from "react";
import black_tshirt from "../../../../Assets/Black_tshirt.png";
import shirt from "../../../../Assets/Shirt.png";
import Orange_tshirt from "../../../../Assets/Orange_tshirt.png";
import pent from "../../../../Assets/pent.png";
import axios from "axios";
import api from "../../../../API/Api";

function Products(props) {
  const [response, setResponse] = useState([]);
  const call = async () => {
    const response = await axios.get(api.url);
    console.log(response.data.Products);
    setResponse(response.data.Products);
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <>
      <div className="pt-20 ">
        <div className="lg:w-11/12 w-8/12 justify-center flex ml-20">
          <h1 className="text-5xl font-bold">Top Selling</h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="flex w-5/6 justify-around mt-20 flex-wrap">
            {response.map((val) => {
              console.log(val.Image);
              return (
                <>
                  <div className="block lg:pb-2 pb-12">
                    <div>
                      <img
                        className="rounded-3xl"
                        src={`http://localhost:3000/${val.Image}`}
                      ></img>
                    </div>
                     
                    <p className="text-s font-bold tracking-normal mt-2">{val.Name}</p>
                    <div className="flex ml-1"><p className="text-xl font-bold mt-1">${val.Price}</p>
                    <p className="text-xl font-bold mt-1 ml-2 text-gray-400 line-through">${val.Price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center pb-20">
          <button className="bg-white lg:w-1/12 w-1/6 h-12 mt-12 rounded-3xl  text-black border">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
