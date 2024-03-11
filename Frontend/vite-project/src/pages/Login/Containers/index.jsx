import React, { useState } from 'react'
import View_Login from "../Views/index"
import Call_Api from "../../../Modules/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Logic() {

    const [mail, setmail] = useState("");
  const nav=useNavigate("");
  const [pass, setpass] = useState("");

  const get_email = (e) => {

    setmail(e.target.value);
  };

  const get_pass = (e) => {
     
    setpass(e.target.value);
  
  };

  const send_data = async () => {
    if(mail.length==0 || (mail[0]>='1'&& mail[0]<='9') &&(mail[0]))
    {
      alert("Enter Valid Email")
      return;
    }
    if(pass.length<8 ){
    alert("password should be minimum of 8 length")
    return;
    }
    let flag_small=0,flag_cap=0,flag_number=0,flag_spl_char=0;
    for(let i=0;i<pass.length;i++)
    {
            if(pass[i]>='a' &&pass[i]<='z')
            {
              flag_small=1;
               continue;
            }
            if(pass[i]>='A' &&pass[i]<='Z')
            {
              flag_cap=1;
              continue;
            }
            if(pass[i]>='0' &&pass[i]<='9' )
            {
              flag_number=1;
              continue;
            }

            if(pass[i]=='@' || pass[i]=='$' || pass[i]=='!' || pass[i]=='£' || pass[i]=='%' || pass[i]=='^' || pass[i]=='&' || pass[i]=='*' )
            {
             
              flag_spl_char=1;
              continue;
            }
    }

    if(flag_cap==0){
    alert("Password should contain 1 capital letter");
    return;
    }

    if(flag_small==0){
      alert("Password should contain 1 small letter");
      return;
      }

      if(flag_number==0){
        alert("Password should contain 1 number letter");
        return;
        }

        if(flag_spl_char==0){
          alert("Password should contain 1 special letter");
          return;
          }
    const res = await Call_Api(mail, pass);

    if (res.data == "not authorized") alert("User not Authroized");
    else {
      localStorage.setItem("token", res.data);
       nav("/home");
    }
  };
  return (
    <div>
      <View_Login get_email={get_email} get_pass={get_pass} send_data={send_data}/>
    </div>
  )
}

export default Logic
