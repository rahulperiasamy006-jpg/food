import React from 'react';

const FoodList = ({ foods, addToCart }) => {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:'20px', marginTop:'20px' }}>
      {foods.map(food => (
        <div key={food.id} style={{ border:'1px solid #ddd', padding:'10px', borderRadius:'8px', width:'200px' }}>
          <h3>{food.name}</h3>
          <p>Price: ${food.price}</p>
          <button onClick={() => addToCart(food)} style={{ background:'#4f46e5', color:'white', padding:'5px 10px', border:'none', borderRadius:'5px' }}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
