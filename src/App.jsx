import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './Component/Header.jsx';
import Home from "./Component/Home.jsx";
import ViewCart from "./Component/ViewCart.jsx";
import { createContext, useState } from "react";

export const cartcontext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <cartcontext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ViewCart" element={<ViewCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartcontext.Provider>
  );
};

export default App;




