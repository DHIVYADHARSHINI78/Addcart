// import React from 'react';
// import foodItems from './assets/data';


// const App = () => {
//   return (
//     <div className="app">
//       <h1>Food Items</h1>
//       <div className="food-container">
//         {foodItems.map((item) => (
//           <div key={item.id} className="food-card">
//             <img src={item.pic} alt={item.name} className="food-image" />
//             <h2>{item.name}</h2>
//             <p>₹{item.amt}</p>
//             <p>Shop: {item.shop}</p>
//             <p>Type: {item.ftype}</p>
//             <p>{item.latest ? '🆕 Latest' : ''}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './Component/Header';
import Home from "./Component/Home";
import ViewCart from "./Component/ViewCart";
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




