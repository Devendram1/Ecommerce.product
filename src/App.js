import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import HotDeals from "./Pages/HotDeals";
import FacQ from "./Pages/FacQ";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/HotDeals" element={<HotDeals />} />
        <Route path="/FacQ" element={<FacQ />} />
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;
