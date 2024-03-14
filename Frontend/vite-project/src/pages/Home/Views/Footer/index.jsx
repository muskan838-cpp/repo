import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full mt-20 flex justify-center">
        <div className="w-10/12  bg-black rounded-3xl p-12 flex">
          <div className="w-11/12">
            <p className="text-white text-5xl w-3/4  font-extrabold leading-[60px] pl-20">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
          </div>

          <div className="w-2/4">
            <div className="bg-white  flex w-3/4 rounded-3xl p-3 pl-10">
              <input type="email" placeholder="Enter Your Email"></input>
            </div>
            <div className="bg-white mt-8 w-3/4 rounded-3xl p-3 justify-center flex">
              Subscribe to Newsletter
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  bg-[F0F0F0] h-94">


      </div>
    </>
  );
}

export default Footer;
