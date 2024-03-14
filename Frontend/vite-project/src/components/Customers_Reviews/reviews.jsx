import React from "react";
import ReactStars from "react-rating-stars-component";

function Reviews() {
  return (
    <>
      <div className="border rounded-lg p-4 m-4 ">
        <div>
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
          <p className="text-2xl font-bold mt-2 mb-2">Sarah M.</p>
          <p className="text-s text-gray-500 text-wrap">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
