import React, { useState } from "react";

import globe from "../../../Assets/globe.png";
import google from "../../../Assets/google.png";
import facebook from "../../../Assets/facebook.png";
import apple from "../../../Assets/apple.png";
function login({get_email,get_pass,send_data})
{
    return (
        <>
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full bg-white sm:w-2/3 lg:w-1/4 shadow-2xl rounded-3xl">
              <div className="w-full text-center">
                <div className="w-full flex justify-center pt-8 pb-6">
                  <div className="h-14 w-14 p-2 bg-white rounded-xl shadow-lg">
                    <img className="w-10" src={globe}></img>
                  </div>
                </div>
    
                <div className="-mb-5 w-full">
                  <p className="text-2xl font-sans font-medium ">Welcome back</p>
                  <p className="font-sans text-sm">
                    Please enter your details to sign in
                  </p>
                </div>
              </div>
              <div className="flex w-full mt-[40px] p-[20px]">
                <button className="w-1/3 h-[50px] flex justify-center items-center bg-white  rounded-lg shadow-lg ">
                  <img className="w-1/5 h-7" src={google}></img>
                </button>
    
                <button className="w-1/3 h-[50px] flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
                  <img className="w-1/5 h-7" src={facebook}></img>
                </button>
                <button className="w-1/3 h-[50px] flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
                  <img className=" h-8" src={apple}></img>
                </button>
              </div>
    
              <div className="flex mt-3 w-11/12 ml-5">
                <div className="border-t w-1/2 mr-3 mt-3"></div>
                <p>or</p>
                <div className="border-t w-1/2 ml-3 mt-3"></div>
              </div>
    
              <div className="ml-5 mt-4 w-full">
                <div className="mt-3">
                  <p className="text-s font-sans mt-4">Email Adress</p>
                  <input
                    onChange={get_email}
                    className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
                    type="email"
                    placeholder="Enter your email"
                  ></input>
                </div>
    
                <div className="mt-3">
                  <p className="text-s font-sans mt-4 ">Password</p>
                  <input
                    onChange={get_pass}
                    className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
                    type="text"
                    placeholder="******"
                  ></input>
                </div>
              </div>
    
              <div className="border-t w-full mt-9"></div>
    
              <button
                onClick={send_data}
                className="w-11/12 bg-black rounded-lg text-white h-12 ml-5 mt-6"
              >
                Sign in
              </button>
    
              <div className="flex mt-5 w-full items-center justify-center mb-12">
                <p className="text-xs">Don't have an account?</p>
                <a className="text-blue-500 text-xs ml-3">Create Account</a>
              </div>
            </div>
          </div>
        </>
      );
}

export default login