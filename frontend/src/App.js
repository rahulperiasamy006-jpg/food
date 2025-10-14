import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FoodList from './components/FoodList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const foods = [
    { id: 1, name: "Pizza", price: 10 },
    { id: 2, name: "Burger", price: 7 },
    { id: 3, name: "Pasta", price: 8 },
    { id: 4, name: "Salad", price: 5 },
    { id: 5, name: "Sushi", price: 12 }
  ];

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index,1);
    setCart(newCart);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div style={{ padding:'20px' }}>
        <FoodList foods={foods} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
