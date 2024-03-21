require('dotenv').config();
const express = require('express');
const connectDB = require('../prashantfoundation/src/configs/db');
const userRouter = require("../prashantfoundation/src/routes/userRoutes")

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// user routes 
app.use('/user', userRouter);

// Start server and connect to MongoDB
const PORT = process.env.PORT || 8080;
const MONGOURL = process.env.MONGOURL;
app.listen(PORT, async () => {
    try {
        await connectDB(MONGOURL);
        console.log(`Server is running on port ${PORT} and connected to MongoDB`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
});
