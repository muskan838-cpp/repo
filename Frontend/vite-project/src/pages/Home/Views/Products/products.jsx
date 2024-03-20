import React, { useEffect, useState } from "react";
import black_tshirt from "../../../../Assets/Black_tshirt.png";
import shirt from "../../../../Assets/Shirt.png";
import Orange_tshirt from "../../../../Assets/Orange_tshirt.png";
import pent from "../../../../Assets/pent.png";
import axios from "axios";
import api from "../../../../API/Api";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const [response, setResponse] = useState([]);
  const nav = useNavigate("");

  const call = async () => {
    const response = await axios.get(api.url);
    console.log(response.data);
    setResponse(response.data);
  };

  useEffect(() => {
    call();
  }, []);

  const handleClick = (p_id) => {
    nav(`Product_Details/${p_id}`);
  };
  return (
    <>
      <div className="pt-20">
        <div className="lg:w-11/12 w-8/12 justify-center flex ml-20">
          <h1 className="text-5xl font-bold">{props.title}</h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="flex w-5/6 justify-around mt-20 flex-wrap ">
            {response?.map((val) => {
              console.log(val.Image);
              return (
                <>
                  <button
                    className="block lg:pb-2 pb-12"
                    onClick={() => handleClick(val.Id)}
                  >
                    <div>
                      <img
                        className="rounded-3xl"
                        src={`http://localhost:3000/${val.Image}`}
                      ></img>
                    </div>

                    <p className="text-s font-bold tracking-normal mt-2">
                      {val.Name}
                    </p>
                    <div className="flex ml-1">
                      <p className="text-xl font-bold mt-1">${val.Price}</p>
                      <p className="text-xl font-bold mt-1 ml-2 text-gray-400 line-through">
                        ${val.Price}
                      </p>
                    </div>
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-white lg:w-1/12 w-1/6 h-12 mt-12 rounded-3xl text-black border">
          View All
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/4  border-t  mt-20"></div>
      </div>
    </>
  );
}

export default Products;
