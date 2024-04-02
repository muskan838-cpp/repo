import React, { useContext, useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import api from "../../../../API/Api";
import axios from "axios";
import { MyContext } from "../HeroSection/index";
import FilterIcon from "../../../../Assets/filterIcon.png";
function FilterView() {
  const { setResponse } = useContext(MyContext);

  const [filters, setFilters] = useState([]);
  const checkboxFilter = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.id]);
    }
  };
  const [sizes, setSizes] = useState([]);

  const handleSizes = (e) => {
    setSizes([...sizes, e.target.name]);
  };

  const [style, setStyle] = useState([]);
  const handleDressStyle = (e) => {
    setStyle([...style, e.target.innerText]);
  };

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);

  const sendFilters = async () => {
    const filteredProducts = await axios.post(api.filters, {
      filters,
      sizes,
      style,
      minVal,
      maxVal,
    });
    setResponse(filteredProducts.data[0]);
  };

  return (
    <div className="lg:p-4 border rounded-3xl m-4 lg:w-1/4 md:w-1/2 w-full">
      <div className="flex p-2 flex-wrap">
        <div className="flex lg:w-1/2 w-full">
          <h1 className="font-medium text-xl">Filters</h1>
        </div>
        <div className="flex justify-end w-1/2 lg:mt-1">
          <img className="w-1/6 h-2/3" src={FilterIcon} alt="filterLogo" />
        </div>
      </div>
      <hr/>
      <div>
        <ul className="text-gray-400 text-sm p-2">
          <li className="p-1">
            <input
              onChange={checkboxFilter}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="T-shirts"
            />
            <label className="ml-2" htmlFor="T-shirts">
              T-shirts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={checkboxFilter}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Shorts"
            />
            <label className="ml-2" htmlFor="Shorts">
              Shorts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={checkboxFilter}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Shirts"
            />
            <label className="ml-2" htmlFor="Shirts">
              Shirts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={checkboxFilter}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Hoodie"
            />
            <label className="ml-2" htmlFor="Hoodie">
              Hoodie
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={checkboxFilter}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Jeans"
            />
            <label className="ml-2" htmlFor="Jeans">
              Jeans
            </label>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <div className="p-2">
          <h1 className=" font-medium text-xl">Price</h1>
        </div>
        <div>
          <MultiRangeSlider
            onChange={(e) => {
              setMinVal(e.minValue);
              setMaxVal(e.maxValue);
            }}
            min={0}
            max={1000}
            step={5}
            className=" shadow-none border-none "
            barInnerColor="black"
            ruler="false"
            thumbLeftColor="black"
            thumbRightColor="black"
          />
        </div>
      </div>
      <hr />
      <div className="p-2">
        <h1 className=" font-medium text-xl">Size</h1>
        <div>
          <div className="flex flex-wrap">
            <button
              onClick={handleSizes}
              name="XX-Small"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              XX-Small
            </button>
            <button
              onClick={handleSizes}
              name="X-Small"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              X-Small
            </button>
            <button
              onClick={handleSizes}
              name="Small"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              Small
            </button>
            <button
              onClick={handleSizes}
              name="Medium"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              Medium
            </button>
            <button
              onClick={handleSizes}
              name="Large"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              Large
            </button>
            <button
              onClick={handleSizes}
              name="X-Large"
              className="rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              X-Large
            </button>
            <button
              onClick={handleSizes}
              name="X-Large"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              XX-Large
            </button>
            <button
              onClick={handleSizes}
              name="3X-Large"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              3X-Large
            </button>
            <button
              onClick={handleSizes}
              name="4X-Large"
              className=" rounded-full bg-[#F0F0F0] text-gray-500 text-xs p-2 m-2"
            >
              4X-Large
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2">
        <h1 className=" font-medium text-xl">Dress Style</h1>
        <div>
          <ul className="text-gray-400 text-sm p-2">
            <li className="p-1 hover:cursor-pointer" onClick={handleDressStyle}>
              Casual
            </li>
            <li className="p-1 hover:cursor-pointer" onClick={handleDressStyle}>
              Formal
            </li>
            <li className="p-1 hover:cursor-pointer" onClick={handleDressStyle}>
              Party
            </li>
            <li className="p-1 hover:cursor-pointer" onClick={handleDressStyle}>
              Gym
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center pt-2 ">
        <button
          onClick={sendFilters}
          className="rounded-full bg-black text-white text-xs p-3 w-full"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
export default FilterView;
