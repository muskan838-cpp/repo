import React from "react";
import search from "../../../Assets/Frame.png";
import cart from "../../../Assets/Vector.png";
import profile from "../../../Assets/Cart.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home/cart");
  };
  const ans = useSelector((state) => state.product);
  console.log(ans);
  return (
    <>
      <div className="w-screen flex justify-center h-28 pt-6 lg:pl-12 pl-12">
        <div className="sm:w-screen lg:w-11/12 w-screen bg-white h-16 flex items-center">
          <div className="text-3xl font-bold font-serif">SHOP.CO</div>
          <div
            className="lg:ml-24 md:ml-48 sm:ml-20
          w-3/12"
          >
            <ul className="lg:flex hidden justify-between text-base font-normal ">
              <li>Shop</li>
              <li>On Sale</li>

              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className="w-1/3 bg-[#F0F0F0] rounded-3xl pl-10 ml-8 lg:flex hidden">
            <div className="flex  items-center h-10  w-full">
              <img src={search} className="w-5"></img>
              <input
                className="ml-6 focus:outline-none bg-[#F0F0F0]"
                type="text"
                placeholder="Search For Products"
              ></input>
            </div>
          </div>
          <div className="flex">
            <img src={cart} className="lg:ml-16 ml-2"></img>
            <img onClick={handleClick} className="ml-5" src={profile}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
