import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../../API/Api";
export function home() {
  const [toogle, setToogle] = useState(true);
  const [dataFromDataBase, setDataFromDataBase] = useState([]);
  const [value, setvalue] = useState([]);
  const nav = useNavigate();
  const handler = async () => {
    const res = await axios.get(api.products);
    console.log(res.data);
    if (res.status === 200) {
      setvalue(res.data);
    } else setvalue([]);
  };
  const deleteProduct = async (id) => {
    await axios.post(api.delete, {
      productId: id,
    });
  };
  const products = async () => {
    const response = await axios.get("http://localhost:3000/prods");
    setDataFromDataBase(response.data);
  };

  const handleUpdate = async (id) => {
    nav(`/updateProducts/${id}`);
  };
  useEffect(() => {
    products();
    handler();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>Products</h1>
      <div className="w-full flex justify-center items-center p-5">
        <div className="flex w-11/12 mt-4 flex-wrap p-5 justify-center items-center">
          {value.map((val) => {
            return (
              <>
                <div className="ml-5 mt-5 ">
                  <div className=" w-1/2 lg:pb-7 pb-12 border ">
                    <div className="flex justify-center">
                      <img
                        className=" w-1/3"
                        src={`http://localhost:3000/assests/${val.image}.png`}
                      ></img>
                    </div>

                    <p className="text-s font-bold  mt-2 text-center">
                      {val.name}
                    </p>
                    <div className="ml-1 text-center">
                      <p className="text-xl font-bold mt-1">${val.price}</p>
                      <p className="text-sm w-3/4  mt-1 ml-2 text-gray-400 ">
                        ${val.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          deleteProduct(val._id);
                        }}
                        className="bg-black lg:w-2/5 w-1/2 h-12 mt-12 rounded-3xl  text-white border"
                      >
                        Remove Product
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate(val._id);
                        }}
                        className="bg-black ml-3 lg:w-2/5 w-1/2 h-12 mt-12 rounded-3xl  text-white border"
                      >
                        Update Product
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default home;
