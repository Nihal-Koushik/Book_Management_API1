require('dontenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// MongoDB Connection
mongoose
    .connect("process.env.MONGO_URI", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error: ", err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
