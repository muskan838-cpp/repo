import React from "react";
import ReactStars from "react-rating-stars-component";

function Reviews(props) {
  return (
    <>
      <div className="border rounded-lg p-4 m-4 ">
        <div>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            value={props.rating}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
          />
          <p className="text-2xl font-bold mt-2 mb-2">{props.name}</p>
          <p className="text-s text-gray-500 text-wrap">{props.review}</p>

          <p className="text-s text-gray-500 text-wrap mt-8">{props.posted}</p>
        </div>
      </div>
    </>
  );
}

export default Reviews;
