import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#4f46e5', color: 'white', display: 'flex', justifyContent:'space-between' }}>
      <h2>Food Delivery</h2>
      <div>Cart Items: {cartCount}</div>
    </nav>
  );
};

export default Navbar;
