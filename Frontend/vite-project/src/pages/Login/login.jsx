// import React, { useState } from "react";

// import globe from "../../Assets/globe.png";
// import google from "../../Assets/google.png";
// import facebook from "../../Assets/facebook.png";
// import apple from "../../Assets/apple.png";
// import Call_Api from "../../Modules/modules";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// function login() {
//   const [mail, setmail] = useState("");
//   const nav=useNavigate("");
//   const [pass, setpass] = useState("");
// // 
//   const get_email = (e) => {

//     setmail(e.target.value);
//   };

//   const get_pass = (e) => {
     
//     setpass(e.target.value);
  
//   };

//   const send_data = async () => {
//     if(mail.length==0 || (mail[0]>='1'&& mail[0]<='9') &&(mail[0]))
//     {
//       alert("Enter Valid Email")
//       return;
//     }
//     if(pass.length<8 ){
//     alert("password should be minimum of 8 length")
//     return;
//     }
//     let flag_small=0,flag_cap=0,flag_number=0,flag_spl_char=0;
//     for(let i=0;i<pass.length;i++)
//     {
//             if(pass[i]>='a' &&pass[i]<='z')
//             {
//               flag_small=1;
//                continue;
//             }
//             if(pass[i]>='A' &&pass[i]<='Z')
//             {
//               flag_cap=1;
//               continue;
//             }
//             if(pass[i]>='0' &&pass[i]<='9' )
//             {
//               flag_number=1;
//               continue;
//             }

//             if(pass[i]=='@' || pass[i]=='$' || pass[i]=='!' || pass[i]=='£' || pass[i]=='%' || pass[i]=='^' || pass[i]=='&' || pass[i]=='*' )
//             {
             
//               flag_spl_char=1;
//               continue;
//             }
//     }

//     if(flag_cap==0){
//     alert("Password should contain 1 capital letter");
//     return;
//     }

//     if(flag_small==0){
//       alert("Password should contain 1 small letter");
//       return;
//       }

//       if(flag_number==0){
//         alert("Password should contain 1 number letter");
//         return;
//         }

//         if(flag_spl_char==0){
//           alert("Password should contain 1 special letter");
//           return;
//           }
//     const res = await Call_Api(mail, pass);

//     if (res.data == "not authorized") alert("User not Authroized");
//     else {
//       localStorage.setItem("token", res.data);
//        nav("/home");
//     }
//   };
//   return (
//     <>
//       <div className="w-full h-screen flex justify-center items-center">
//         <div className="w-full bg-white sm:w-2/3 lg:w-1/4 shadow-2xl rounded-3xl">
//           <div className="w-full text-center">
//             <div className="w-full flex justify-center pt-8 pb-6">
//               <div className="h-14 w-14 p-2 bg-white rounded-xl shadow-lg">
//                 <img className="w-10" src={globe}></img>
//               </div>
//             </div>

//             <div className="-mb-5 w-full">
//               <p className="text-2xl font-sans font-medium ">Welcome back</p>
//               <p className="font-sans text-sm">
//                 Please enter your details to sign in
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full mt-[40px] p-[20px]">
//             <button className="w-1/3 h-[50px] flex justify-center items-center bg-white  rounded-lg shadow-lg ">
//               <img className="w-1/5 h-7" src={google}></img>
//             </button>

//             <button className="w-1/3 h-[50px] flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
//               <img className="w-1/5 h-7" src={facebook}></img>
//             </button>
//             <button className="w-1/3 h-[50px] flex justify-center items-center bg-white ml-7 rounded-lg shadow-lg ">
//               <img className=" h-8" src={apple}></img>
//             </button>
//           </div>

//           <div className="flex mt-3 w-11/12 ml-5">
//             <div className="border-t w-1/2 mr-3 mt-3"></div>
//             <p>or</p>
//             <div className="border-t w-1/2 ml-3 mt-3"></div>
//           </div>

//           <div className="ml-5 mt-4 w-full">
//             <div className="mt-3">
//               <p className="text-s font-sans mt-4">Email Adress</p>
//               <input
//                 onChange={get_email}
//                 className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
//                 type="email"
//                 placeholder="Enter your email"
//               ></input>
//             </div>

//             <div className="mt-3">
//               <p className="text-s font-sans mt-4 ">Password</p>
//               <input
//                 onChange={get_pass}
//                 className="w-4/5 rounded-lg border h-11 mt-2 ml-2 pl-2"
//                 type="text"
//                 placeholder="******"
//               ></input>
//             </div>
//           </div>

//           <div className="border-t w-full mt-9"></div>

//           <button
//             onClick={send_data}
//             className="w-11/12 bg-black rounded-lg text-white h-12 ml-5 mt-6"
//           >
//             Sign in
//           </button>

//           <div className="flex mt-5 w-full items-center justify-center mb-12">
//             <p className="text-xs">Don't have an account?</p>
//             <a className="text-blue-500 text-xs ml-3">Create Account</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default login;

import React from 'react'
import Containers from "./Containers/index"
function Login() {
  return (
    <div>
      <Containers />
    </div>
  )
}

export default Login

