import React from 'react';
import './product.css';
import { useContext } from 'react';
import { cartcontext } from '../App';
const Product = ({ product}) => {


  const {cart,setCart} = useContext(cartcontext);
  const name = product.name.length > 21 ? product.name.substring(0, 20) + "..." : product.name;

  const addcart = () => {
    setCart([...cart, product]); // Add product to cart
  };

  const removecart = (product) => {
    setCart(cart.filter((c) => c.id !== product.id)); // Remove product from cart
  };

  // Check if the product is already in the cart
  const isProductInCart = cart.some((c) => c.id === product.id);

  return (
    <div className='product'>
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs: {product.amt}</p>

        {isProductInCart ? 
          <button onClick={() => removecart(product)} className='btnremove'>Remove from cart</button> 
          : 
          <button onClick={addcart}>Add to cart</button>
        }
      </div>
    </div>
  );
};

export default Product;
