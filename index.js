require('dotenv').config();
const express = require('express');
const connectDB = require('../prashantfoundation/src/configs/db');
const userRouter = require("../prashantfoundation/src/routes/userRoutes")


// port and the database string for storing the user data 
const MONGOURL = `mongodb+srv://hemant:hemant123@cluster0.jhbytda.mongodb.net/`
PORT = 8080
// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// user routes 
app.use('/user', userRouter);

// Start server and connect to MongoDB
app.listen(PORT, async () => {
    try {
        await connectDB(MONGOURL);
        console.log(`Server is running on port ${PORT} and connected to MongoDB`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
});
