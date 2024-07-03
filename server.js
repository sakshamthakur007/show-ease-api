const express = require("express");
const app = express();
const connectDB = require('./dbConnection');
const cors = require("cors");

// Middleware for enabling CORS from a specific origin
app.use(cors({
    origin: 'https://shoe-ease-frontend.vercel.app', // Note: No trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // If you need to include cookies in the requests
}));

// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Connect to the database
connectDB();

// Middleware for routing API requests
app.use("/api", require("./routes"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
