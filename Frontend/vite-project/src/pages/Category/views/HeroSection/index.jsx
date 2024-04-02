import React, { useContext, useState } from "react";
import FilterView from "../Filters";
import { createContext } from "react";
const MyContext = createContext("");

function hero() {
  const [response, setResponse] = useState();
  console.log(response);
  return (
    <>
      <div className="w-full px-20 lg:flex ">
        <MyContext.Provider value={{ response, setResponse }}>
          <FilterView />
        </MyContext.Provider>
        <div className="w-4/5 flex pl-10 flex-wrap">
          {response?.map((val) => {
            return (
              <>
                <div className="lg:pr-12 lg:w-1/3  w-full lg:mt-0 mt-4">
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
                  <p className="text-s font-bold tracking-normal mt-2">
                    {val.style}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export { MyContext };
export default hero;
