const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory "localStorage" (acting as temporary storage)
let localStorage = {};

// Sample route to get data from "localStorage"
app.get("/data", (req, res) => {
  res.json(localStorage);
});

// Route to add data to "localStorage"
app.post("/data", (req, res) => {
  const { key, value } = req.body;
  localStorage[key] = value;
  res.json({ message: "Data added successfully", data: localStorage });
});

// Route to delete data from "localStorage"
app.delete("/data/:key", (req, res) => {
  const key = req.params.key;
  if (localStorage[key]) {
    delete localStorage[key];
    res.json({ message: "Data deleted successfully", data: localStorage });
  } else {
    res.status(404).json({ message: "Key not found" });
  }
});

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
