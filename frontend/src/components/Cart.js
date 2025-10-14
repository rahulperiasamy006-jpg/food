import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ marginTop:'30px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> :
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom:'10px' }}>
                {item.name} - ${item.price} 
                <button onClick={() => removeFromCart(index)} style={{ marginLeft:'10px', background:'red', color:'white', border:'none', borderRadius:'5px', padding:'2px 5px' }}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={() => alert("Order Placed!")} style={{ background:'#4f46e5', color:'white', padding:'5px 10px', border:'none', borderRadius:'5px' }}>Place Order</button>
        </>
      }
    </div>
  );
};

export default Cart;
