const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/prd_db")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Schema
const PrdSchema = new mongoose.Schema({
  problem: String,
  goals: [String],
  personas: [String]
});

const PRD = mongoose.model("PRD", PrdSchema);

// ✅ ROOT ROUTE (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// ✅ API route
app.get("/api/prd", async (req, res) => {
  const data = await PRD.findOne();
  res.json(data);
});

// ✅ Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
