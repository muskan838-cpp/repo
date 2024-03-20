import React from "react";
import TwitterIcon from "../../Assets/TwitterIcon.png";
import FaceBookIcon from "../../Assets/FaceBookIcon.png";
import InstaIcon from "../../Assets/InstaIcon.png";
import GitIcon from "../../Assets/GitIcon.png";
function Footer() {
  return (
    <>
      <div className="w-full mt-20 flex justify-center relative top-16 z-10">
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
      <div className="flex p-20 pl-36 bg-[#F0F0F0] w-full absolute justify-center pt-28">
        <div className="w-1/3">
          <div className=" w-1/7 mr-2 flex justify-start items-center">
            <h1 className=" text-3xl font-extrabold pb-4">SHOP.CO</h1>
          </div>
          <div className="w-2/3">
            <p className="text-sm text-gray-500">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="flex mt-8">
            <img className="pr-4" src={TwitterIcon} alt="TwitterLogo" />
            <img className="pr-4" src={FaceBookIcon} alt="FaceBookLogo" />
            <img className="pr-4" src={InstaIcon} alt="InstaLogo" />
            <img src={GitIcon} alt="GitLogo" />
          </div>
        </div>
        <div className="flex justify-evenly w-2/3">
          <div>
            <p className="font-bold pb-4">Company</p>
            <ul className="text-gray-500">
              <li className="pb-3">About</li>
              <li className="pb-3">Features</li>
              <li className="pb-3">Works</li>
              <li className="pb-3">Career</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4">Help</p>
            <ul className="text-gray-500">
              <li className="pb-3"> Customer Support</li>
              <li className="pb-3">Delivery Details</li>
              <li className="pb-3">Terms & Conditions</li>
              <li className="pb-3"> Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4">FAQ</p>
            <ul className="text-gray-500">
              <li className="pb-3">Account</li>
              <li className="pb-3">Manage Deliveries</li>
              <li className="pb-3">Orders</li>
              <li className="pb-3">Payments</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4">Resources</p>
            <ul className="text-gray-500">
              <li className="pb-3"> Free eBooks</li>
              <li className="pb-3">Development Tutorial</li>
              <li className="pb-3">How to - Blog</li>
              <li className="pb-3">Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
