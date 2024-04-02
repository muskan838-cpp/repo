import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../../../Assets/DeleteIcon.png";
import { removeFromCart } from "../../../../Core/Redux/Slices/CartSlice";
function leftcart() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [res, setRes] = useState();
  useEffect(() => {
    setRes(data.product);
    console.log(data.product);
  });
  return (
    <>
      <div className="border p-5 rounded-2xl">
        {res?.map((val) => {
          return (
            <>
              <div className="flex lg:w-11/12 w-full">
                <img
                  className="lg:w-1/5 w-1/4"
                  src={`http://localhost:3000/${val.Image}`}
                ></img>

                <div className="w-4/5 pl-5 mt-2">
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">{val.name}</p>
                    <img
                      src={deleteIcon}
                      onClick={()=>dispatch(removeFromCart(val.Id))}
                    ></img>
                  </div>
                  <p>Size:{val.Size}</p>
                  <p className="text-sm font-normal">Price : ${val.price}</p>

                  <div className="flex w-full justify-between mt-4">
                    <p className="text-xl font-bold"> ${val.offerPrice}</p>

                    <div className="flex  text-base rounded-full bg-[#F0F0F0]  justify-around lg:w-1/5 w-1/3">
                      <button className="text-2xl">-</button>
                      <div className="text-lg">{val.numberOfProducts}</div>
                      <button className="text-2xl">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mt-7 pb-4"></hr>
            </>
          );
        })}
      </div>
    </>
  );
}

export default leftcart;
