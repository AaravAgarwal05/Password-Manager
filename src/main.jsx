import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import "./index.css";
import About from "./Components/About";
import Contact from "./Components/Contact";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/Password-Manager">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
