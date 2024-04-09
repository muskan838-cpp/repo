import React, { useState } from "react";
import View_Login from "../Views/index";
import Call_Api from "../../../Modules/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Logic() {
  const [mail, setmail] = useState("");
  const nav = useNavigate("");
  const [pass, setpass] = useState("");

  const get_email = (e) => {
    setmail(e.target.value);
  };

  const get_pass = (e) => {
    setpass(e.target.value);
  };

  const send_data = async (val) => {
    
    const res = await Call_Api(val.email, val.password);

  
    if (res.data == "user Not Authorized") alert(res.data);
    else {
      localStorage.setItem("token", res.data);
      nav("/home");
    }
  };
  return (
    <div>
      <View_Login
        get_email={get_email}
        get_pass={get_pass}
        send_data={send_data}
      />
    </div>
  );
}

export default Logic;
