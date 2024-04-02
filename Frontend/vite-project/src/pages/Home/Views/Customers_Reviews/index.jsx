import React from "react";
import Customers_Reviews from "../../../../components/Customers_Reviews/reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex justify-center ">
          <div className="w-4/5 pt-28 text-5xl font-bold flex ">
            <p>OUR HAPPY CUSTOMERS</p>
          </div>
        </div>
        <div className="w-full  flex justify-center mt-12">
          <div className="w-10/12">
            <Slider {...settings}>
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
              <Customers_Reviews />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
