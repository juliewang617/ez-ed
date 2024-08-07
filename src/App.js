import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";
import GetSupport from "./pages/GetSupport";
import WhatYouCanDo from "./pages/WhatYouCanDo";
import Questionaire from "./pages/Questionaire";
import Identifier from "./pages/Identifier";

/**
 * @returns {ReactNode} A React Element that renders the App entry.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/getsupport" element={<GetSupport />} />
        <Route path="/questionaire" element={<Questionaire />} />
        <Route path="/identifier" element={<Identifier />} />
        <Route path="/whatyoucando" element={<WhatYouCanDo />} />
      </Routes>
    </BrowserRouter>
  );
}
