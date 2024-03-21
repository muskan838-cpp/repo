import React, { useEffect } from "react";
import Ratingreviews from "./RatingReviews/index";
import { useState } from "react";
import Frequently from "./frequentlyAskedQuestions/index";
import ProductDetails from "./productDetails/index";
import axios from "axios";
import api from "../../../../API/Api";
import { useParams } from "react-router-dom";
import MyContext from "../../../../context/reviewsContext";
import Header from "../../../../components/Headers";

function Bottom() {
  const param = useParams();
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(false);
  const [data, setData] = useState();
  const handler = () => {
    setActive(!active);
    faqActive == true ? setFaqActive(!faqActive) : setFaqActive(faqActive);
    reviewsActive == true
      ? setReviewsActive(!reviewsActive)
      : setReviewsActive(reviewsActive);
  };
  const [faqActive, setFaqActive] = useState(false);
  const handlerFAQ = () => {
    setFaqActive(!faqActive);
    active == true ? setActive(!active) : setActive(active);
    reviewsActive == true
      ? setReviewsActive(!reviewsActive)
      : setReviewsActive(reviewsActive);
  };

  const [reviewsActive, setReviewsActive] = useState(true);
  const handlerreviews = () => {
    setReviewsActive(!reviewsActive);
    active == true ? setActive(!active) : setActive(active);
    faqActive == true ? setFaqActive(!faqActive) : setFaqActive(faqActive);
  };
  async function getReviews() {
    const res = await axios.post(api.review, {
      id: param.id,
    });
    setReviews(res);
    setData(res.data[0]);
    // console.log(data);
  }
  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <div className="w-full mt-12">
        <div className="w-11/12 flex justify-around text-xl font-normal   ">
          <p
            onClick={handler}
            className={active ? "text-black border-b-2 pb-2" : "text-[#a5a4a4]"}
          >
            Product Details
          </p>
          <p
            onClick={handlerreviews}
            className={
              reviewsActive ? "text-black border-b-2 pb-2" : "text-[#a5a4a4]"
            }
          >
            Rating & Reviews
          </p>

          <p
            onClick={handlerFAQ}
            className={
              faqActive ? "text-black border-b-2 pb-2" : "text-[#a5a4a4]"
            }
          >
            FAQs
          </p>
        </div>
      </div>
      {active ? (
        <ProductDetails />
      ) : faqActive ? (
        <Frequently />
      ) : (
        <MyContext.Provider value={data}>
          <Ratingreviews />
        </MyContext.Provider>
      )}
    </>
  );
}

export default Bottom;
