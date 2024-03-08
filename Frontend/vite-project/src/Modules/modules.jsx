import React from 'react'
import API from "../API/Api"
import axios from "axios";

 async function Call_API(email,pass) {
    const response=await axios.post(API.url,{
        email_send:email,
        password:pass
    })
  return response;
}

export default Call_API
