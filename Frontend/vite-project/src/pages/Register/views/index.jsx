import React, { useState } from "react";
import { useForm } from "react-hook-form";

import globe from "../../../Assets/globe.png";
import google from "../../../Assets/google.png";
import facebook from "../../../Assets/facebook.png";
import apple from "../../../Assets/apple.png";
import back from "../../../Assets/background.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../API/Api";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const nav = useNavigate();

  const handle = () => {
    nav("/");
  };

  const sendData = async (val) => {
    console.log(errors);
    const res = await axios.post(api.register, {
      Name: val.name,
      Email: val.email,
      Password: val.password,
    });
    if (res.data === "User Already Exists") {
      alert(res.data);
    }
  };
  const handleClick = () => {
    nav("/");
  };
  const handler = (e) => {
    setPassword(e.target.value);
  };
  return (
            <>
              <div className="w-full flex justify-center items-center mt-9">
                <div className="w-11/12 flex  lg:w-3/5 shadow-2xl rounded-3xl">
                  <div className="w-1/2">
                    <div className="w-full text-center">
                      <div className="w-full flex justify-center pt-8 pb-6">
                        <div className="h-14 w-14 p-2 bg-white rounded-xl shadow-lg">
                          <img className="w-10" src={globe}></img>
                        </div>
                      </div>

                      <div className="-mb-5 w-full">
                        <p className="text-2xl font-sans font-medium ">Welcome User!</p>
                        <p className="font-sans text-sm">
                          Please enter your details to Register
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full mt-6 p-4 justify-center">
                      <div className="w-11/12 flex justify-center items-center border rounded-lg      py-2 ">
                        <img className="w-1/12 pr-3" src={google}></img>
                        <button className=" bg-white  text-black ">
                          Continue with google
                        </button>
                      </div>
                    </div>

                    <div className="flex mt-3 w-11/12 ml-5">
                      <div className="border-t w-1/2 mr-3 mt-3"></div>
                      <p>or</p>
                      <div className="border-t w-1/2 ml-3 mt-3"></div>
                    </div>
                    <div className="ml-5 mt-4 w-full">
                      <form
                        onSubmit={handleSubmit((val) => {
                          sendData(val);
                        })}
                      >
                        <div className="mt-3">
                          <input
                            className="w-4/5 rounded-lg border placeholder-black text-black py-2 mt-2 ml-2 pl-2"
                            type="text"
                            placeholder="Name"
                            {...register("name", {
                              required: "Name is required",
                              minLength: {
                                value: 3,
                                message: "Enter Valid Name",
                              },
                            })}
                          ></input>
                          {errors.name && (
                            <p className="text-red-500 ml-2">{errors?.name?.message}</p>
                          )}
                        </div>
                        <div className="mt-3">
                          <input
                            className="w-4/5 rounded-lg border py-2 mt-2 ml-2 pl-2 placeholder-black text-black"
                            type="email"
                            placeholder="Email"
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
                            <p className="text-red-500 ml-2">
                              {errors?.email?.message}
                            </p>
                          )}
                        </div>

                        <div className="mt-3">
                          <input
                            className="w-4/5 rounded-lg border py-2 mt-2 ml-2 pl-2 placeholder-black text-black"
                            type="text"
                            placeholder="******"
                            {...register("password", {
                              required: "password is required",
                              minLength: {
                                value: 8,
                                message: "password must be of minimum 8 length",
                              },
                              pattern: {
                                value:
                                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                                message:
                                  "Password must contain a lower case letter,an upper case letter, a number, a special character",
                              },
                            })}
                          ></input>
                        </div>
                        {errors.password && (
                          <p className="text-red-500 ml-2">
                            {errors?.password?.message}
                          </p>
                        )}
                        <button
                          type="submit"
                          className="w-11/12 bg-black rounded-2xl text-white py-2  mt-6"
                        >
                          Register
                        </button>
                      </form>
                    </div>
                    <div className="border-t w-full mt-4"></div>

                    <div className="flex mt-5 w-full items-center justify-center mb-7">
                      <p className="text-xs">Already have an account?</p>
                      <p
                        className="text-yellow-400 text-xs ml-3 cursor-pointer"
                        onClick={handle}
                      >
                        Log in
                      </p>
                    </div>
                  </div>

                  <div className="w-1/2 bg-[#F2F0F1]">
                    <div className="w-full flex justify-end pr-7 mt-5">
                      <button className="rounded-3xl border border-black px-3 mr-4 py-2 text-sm">
                        Join Us
                      </button>
                      <button
                        onClick={handleClick}
                        className="rounded-3xl border px-3 py-2 text-sm bg-yellow-400"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="w-full flex justify-center">
                      <img src={back} className="w-11/12"></img>
                    </div>
                  </div>
                </div>
              </div>
            </>
  );            
}

export default Register;
