import React, { useEffect, useState, useContext } from 'react';
import './ViewCart.css';
import { cartcontext } from '../App';
const ViewCart = () => {
  const { cart } = useContext(cartcontext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);  // Correct dependency

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-con'>
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-detail">
              <h3>{product.name}</h3>
              <p>Price Rs:{product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className='cart-amt'>Total Amount RS : {total}</h3>
    </>
  );
};

export default ViewCart;
