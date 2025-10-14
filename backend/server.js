// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/foodDeliveryDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Schema for Orders
const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number
    }
  ],
  total: Number,
  date: { type: Date, default: Date.now }
});

// Model
const Order = mongoose.model("Order", orderSchema);

// 📩 POST: Create new order
app.post("/orders", async (req, res) => {
  try {
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No food items provided" });
    }

    const newOrder = new Order({ items, total });
    await newOrder.save();

    console.log("✅ New Order Received:");
    console.log("🍔 Ordered Food Items:", items.map(i => i.name).join(", "));
    console.log("💰 Total:", total);
    console.log("----------------------------------");

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error });
  }
});

// 📤 GET: Fetch all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);

    console.log("📦 All Orders:");
    orders.forEach(order => {
      console.log(`🆔 ${order._id}`);
      console.log(`🍱 Food Items: ${order.items.map(i => i.name).join(", ")}`);
      console.log(`💰 Total: $${order.total}`);
      console.log(`📅 Date: ${order.date}`);
      console.log("----------------------------------");
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
