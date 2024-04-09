import React, { useState } from "react";
import { useForm } from "react-hook-form";

import globe from "../../../Assets/globe.png";
import google from "../../../Assets/google.png";
import facebook from "../../../Assets/facebook.png";
import apple from "../../../Assets/apple.png";
import { useNavigate } from "react-router-dom";
function login({ get_email, get_pass, send_data }) {
  const nav = useNavigate();

  const handler = () => {
    nav("/register");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-11/12 bg-white  lg:w-1/3 shadow-2xl rounded-3xl">
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
          <div className="flex w-full mt-6 p-4">
            <button className="w-1/3 flex justify-center items-center bg-white  rounded-lg shadow-lg ">
              <img className="w-1/5" src={google}></img>
            </button>

            <button className="w-1/3  flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
              <img className="w-1/5 " src={facebook}></img>
            </button>
            <button className="w-1/3  flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
              <img className=" h-8" src={apple}></img>
            </button>
          </div>

          <div className="flex mt-3 w-11/12 ml-5">
            <div className="border-t w-1/2 mr-3 mt-3"></div>
            <p>or</p>
            <div className="border-t w-1/2 ml-3 mt-3"></div>
          </div>

          <div className="ml-5 mt-4 w-full">
            <form
              onSubmit={handleSubmit((val) => {
                console.log(val);
                send_data(val);
              })}
            >
              <div className="mt-3">
                <p className="text-s font-sans mt-4">Email Adress</p>
                <input
                  className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      message: "invalid email address",
                    },
                  })}
                ></input>
                {errors.email && (
                  <p className="text-red-500 ml-2">{errors?.email?.message}</p>
                )}
              </div>

              <div className="mt-3">
                <p className="text-s font-sans mt-4 ">Password</p>
                <input
                  className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
                  type="text"
                  placeholder="******"
                  {...register("password", {
                    required: "password is required",
                  })}
                ></input>
                {errors.password && <p>{errors?.password?.message}</p>}
              </div>
              <button
                type="submit"
                className="w-11/12 bg-black rounded-lg text-white h-12 mt-6"
              >
                Sign in
              </button>
            </form>
          </div>

          <div className="border-t w-full mt-9"></div>
          <div className="flex mt-5 w-full items-center justify-center mb-7">
            <p className="text-xs">Don't have an account?</p>
            <a
              className="text-blue-500 text-xs ml-3 cursor-pointer"
              onClick={handler}
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
