import React, { useEffect, useState } from "react";
import api from "../../../../API/Api";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Hero() {
  const [Product, setProduct] = useState(undefined);
  const [count, setCount] = useState(1);

  const param = useParams();
  const getData = async () => {
    const response = await axios.get(api.url);
    if (response.status === 200) {
      const ans = response.data.find((val) => val.Id === param.id);
      setProduct(ans);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };

  return (
    <>
      <div className="w-full flex justify-center lg:pl-32 pl-12">
        <div className="w-full flex">
          <div className="flex w-1/2  ">
            <div className="w-1/5">
              <img
                className="w-full pb-5"
                src={`http://localhost:3000/${Product?.Image}`}
                alt=""
              />
              <img
                className="w-full pb-5"
                src={`http://localhost:3000/${Product?.Image}`}
                alt=""
              />
              <img
                className="w-full"
                src={`http://localhost:3000/${Product?.Image}`}
                alt=""
              />
            </div>
            <div className="ml-8 w-4/6 mt-3">
              <img
                className="w-11/12"
                src={`http://localhost:3000/${Product?.Image}`}
                alt=""
              />
            </div>
          </div>

          <div className="w-1/2">
            <div className="text-4xl font-bold leading-10 mt-8">
              {Product?.Name}
            </div>
            <div className="mt-3">
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                value={5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
              />
            </div>
            <div className="flex mt-2">
              <p className="text-3xl font-bold mt-1">${Product?.Price}</p>
              <p className="text-3xl font-bold mt-1 ml-2 text-gray-400 line-through">
                ${Product?.Price}
              </p>
            </div>
            <div className="w-3/4  mt-2">
              <p className="text-gray-400">{Product?.desc}</p>
            </div>
            <div>
              <div className="border rounded w-8/12 mt-8"></div>
            </div>
            <div>
              <p className="text-gray-400 mt-3">Choose Size</p>
              <div className="flex mt-3">
                {Product?.sizeSmall === "exist" ? (
                  <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-black text-white ">
                    Small
                  </button>
                ) : (
                  <button className="cursor-not-allowed mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black">
                    Small
                  </button>
                )}
                {Product?.sizeMedium === "exist" ? (
                  <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-black text-white ">
                    Medium
                  </button>
                ) : (
                  <button className="cursor-not-allowed  mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black">
                    Medium
                  </button>
                )}
                {Product?.sizeLarge === "exist" ? (
                  <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-black text-white ">
                    Large
                  </button>
                ) : (
                  <button className="cursor-not-allowed mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black focus:outline-none   ">
                    Large
                  </button>
                )}
                {Product?.sizeXLarge === "exist" ? (
                  <button className="mr-3 text-base p-3 w-1/6 rounded-full bg-black text-white ">
                    X-Large
                  </button>
                ) : (
                  <button className="cursor-not-allowed mr-3 text-base p-3 w-1/6 rounded-full bg-[#F0F0F0] text-black">
                    X-Large
                  </button>
                )}
              </div>
              <div>
                <div className="border rounded w-8/12 mt-8"></div>
              </div>
              <div className="flex mt-8">
                <div className="flex mr-12 text-base p-2 w-1/6 rounded-full bg-[#F0F0F0]  justify-between pl-3 ">
                  <button className="text-2xl" onClick={increment}>
                    +
                  </button>
                  <div className="text-lg">{count}</div>
                  <button className="text-2xl" onClick={decrement}>
                    -
                  </button>
                </div>
                <button className="w-5/12 mr-1 text-base p-3 rounded-full bg-black text-white flex justify-center">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
