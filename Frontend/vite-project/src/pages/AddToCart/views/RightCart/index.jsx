import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function rightCart() {
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();

  const [finaldiscount, setDiscount] = useState();
  const data = useSelector((state) => state);
  
  const helper = () => {
    let totalPrice = 0;
  let discount = 0;
    data?.product?.map((val) => {
      totalPrice += val.numberOfProducts * val.price;
      discount += val.numberOfProducts * (val.price - val.offerPrice);
      console.log(totalPrice)
    });
    let p=0,d=0;
    setPrice(p=totalPrice );
    setDiscount(d=discount);
    let total = p - d + 15;
    setAmount(total);
  };
  useEffect(() => {
    helper();
  }, [data.product.length]);
  return (
    <>
      <div className="border p-5 rounded-2xl">
        <p className="text-2xl font-bold">Order Summary</p>

        <div className=" text-[#9f9e9e] py-2 text-lg font-normal flex justify-between">
          <p>Subtotal</p>
          <p className="text-black">${price}</p>
        </div>
        <div className=" text-[#9f9e9e] text-lg font-normal py-2 flex justify-between">
          <p>Discount</p>
          <p className="text-red-500">-${finaldiscount}</p>
        </div>
        <div className="text-lg font-normal py-2 flex justify-between text-[#9f9e9e]">
          <p>Delivery Fees</p>
          <p className="text-black">$15</p>
        </div>

        <hr></hr>
        <div className="text-lg font-normal py-2 flex justify-between pb-4">
          <p>Total</p>
          <p className="text-black">${amount}</p>
        </div>

        <div className="w-full flex">
          <div className="w-3/5 bg-[#F0F0F0] rounded-3xl">
            <div className="flex  items-center h-10  w-full">
              <input
                className="ml-4 focus:outline-none bg-[#F0F0F0] w-10/12 text-sm"
                type="text"
                placeholder="Add Promo Code"
              ></input>
            </div>
          </div>

          <div className="w-2/5 pl-4">
            <button className="bg-black rounded-3xl text-white w-11/12 h-10">
              Apply
            </button>
          </div>
        </div>
        <button className="bg-black rounded-3xl text-white w-full h-10 mt-7">
          Go to Checkout
        </button>
      </div>
    </>
  );
}

export default rightCart;
