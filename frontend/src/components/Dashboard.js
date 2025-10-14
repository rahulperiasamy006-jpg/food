import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/orders');
      setOrders(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch orders");
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Order Dashboard</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Order ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Items</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total ($)</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order._id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {order.items.map(item => item.name).join(', ')}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.total}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{new Date(order.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
