import { useEffect, useState } from "react";
import Login from "./pages/Login/login";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Views/index"
import Home from "./pages/Home/home";
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
