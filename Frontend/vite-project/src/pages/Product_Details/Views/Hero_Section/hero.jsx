import React, { useEffect, useState } from "react";
import api from "../../../../API/Api";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../Core/Redux/Slices/CartSlice";

function Hero() {
  const [Product, setProduct] = useState(undefined);
  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
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
  }, [param.id]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  };

  const helper = () => {
    dispatch(
      addToCart({
        Id: Product?.Id,
        Image: Product?.Image,
        Name: Product?.Name,
        Price: Product?.Price,
        offerPrice: Product?.offerPrice,
        numberOfProducts: count,
        Size: size,
      })
    );
  };

  
  return (
    <>
      <div className="w-full flex justify-center lg:pl-24 pl-12">
        <div className="w-full lg:flex flex-wrap">
          <div className="flex lg:w-1/2 w-full">
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

          <div className="lg:w-1/2 w-full">
            <div className="text-4xl font-bold leading-10 mt-3">
              {Product?.Name}
            </div>
            <div className="mt-2">
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
              <div className="border rounded lg:w-8/12 w-11/12 mt-5"></div>
            </div>
            <div>
              <p className="text-gray-400 mt-3">Choose Size</p>
              <div className="flex mt-2">
                {Product?.sizeSmall === "exist" ? (
                  <button
                    onClick={() => setSize("Small")}
                    className="mr-3 text-base p-3 lg:w-1/6 w-1/4  rounded-full bg-black text-white "
                  >
                    Small
                  </button>
                ) : (
                  <button className="cursor-not-allowed  mr-3 text-base p-3 lg:w-1/6 w-1/4  rounded-full bg-[#F0F0F0] text-black">
                    Small
                  </button>
                )}
                {Product?.sizeMedium === "exist" ? (
                  <button
                    onClick={() => setSize("Medium")}
                    className="mr-3 text-base p-3 lg:w-1/6 w-1/4 rounded-full bg-black text-white "
                  >
                    Medium
                  </button>
                ) : (
                  <button className="cursor-not-allowed  mr-3 text-base p-3 lg:w-1/6 w-1/4 rounded-full bg-[#F0F0F0] text-black">
                    Medium
                  </button>
                )}
                {Product?.sizeLarge === "exist" ? (
                  <button className="mr-3 text-base p-3 lg:w-1/6 w-1/4  rounded-full bg-black text-white ">
                    Large
                  </button>
                ) : (
                  <button
                    onClick={() => setSize("Large")}
                    className="cursor-not-allowed mr-3 text-base p-3 lg:w-1/6 w-1/4  rounded-full bg-[#F0F0F0] text-black focus:outline-none   "
                  >
                    Large
                  </button>
                )}
                {Product?.sizeXLarge === "exist" ? (
                  <button
                    onClick={() => setSize("X-Large")}
                    className="mr-3 text-base p-3 lg:w-1/6 w-1/4  rounded-full bg-black text-white "
                  >
                    X-Large
                  </button>
                ) : (
                  <button className="cursor-not-allowed mr-3 text-base p-3 lg:w-1/6 sm:w-1/4 md:1/2 rounded-full bg-[#F0F0F0] text-black">
                    X-Large
                  </button>
                )}
              </div>
              <div>
                <div className="border rounded lg:w-8/12 w-11/12 mt-3"></div>
              </div>
              <div className="flex mt-5">
                <div className="flex mr-12 text-base p-2 lg:w-1/5 w-1/4 rounded-full bg-[#F0F0F0]  justify-between pl-3 ">
                  <button className="text-2xl" onClick={increment}>
                    +
                  </button>
                  <div className="text-lg">{count}</div>
                  <button className="text-2xl" onClick={decrement}>
                    -
                  </button>
                </div>
                <button
                  onClick={helper}
                  className="lg:w-5/12 w-1/2 mr-1 text-base p-3 rounded-full bg-black text-white flex justify-center"
                >
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
