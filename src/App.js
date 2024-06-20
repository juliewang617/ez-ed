import React from "react"; 
import {
  BrowserRouter, 
  Routes, 
  Route, 
} from "react-router-dom"; 
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";
import GetSupport from "./pages/GetSupport";
import GiveBack from "./pages/GiveBack";

export default function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/learnmore" element={<LearnMore />}/>
          <Route path="/getsupport" element={<GetSupport />}/>
          <Route path="/giveback" element={<GiveBack />}/>
        </Routes>
    </BrowserRouter>
  )
}