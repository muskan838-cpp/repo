import { useEffect, useState } from "react";
import Login from "./pages/Login/login";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers/Views/index"
import Home from "./pages/Home/home";
import Product_Details from "./pages/Product_Details/index"
function App() {
  const [count, setCount] = useState(0);
 
  return (

    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/Product_Details/:id" element={<Product_Details/>} />

      </Routes>
    </>
  );
}

export default App;
