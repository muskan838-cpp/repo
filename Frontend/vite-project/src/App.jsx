import { useEffect, useState } from "react";
import Login from "./components/Login/login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
function App() {
  const [count, setCount] = useState(0);
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
