import React, { useState } from 'react';
import foodItems from '../assets/data'; // Correct relative path
import Product from './product.jsx';
import './Home.css'
const Home = () => {

    const [product]= useState(foodItems);



  return (
    <div className='product-container'>
      {product.map((product) => (
       <Product key={product.id} 
       product={product} 
       />
      ))}
      
    </div>
  );
};

export default Home;
