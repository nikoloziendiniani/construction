import React from "react"

import './App.css';

import { Routes, Route } from "react-router-dom"

import Navbar from "./layout/navbar/Navbar"
import Footer from "./layout/footer/Footer";

import { Home } from "./pages/home/Home";
import { Rent } from "./pages/services/rent/Rent";
import { Fixing } from "./pages/services/fixing/Fixing"
import { Apartment } from "./pages/apartament/Apartament";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sevices/rent" element={ <Rent />} />
        <Route path="sevices/fix" element={ <Fixing />} />
        <Route path="sevices/rent/apartament/:id" element={<Apartment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
