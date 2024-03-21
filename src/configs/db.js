const mongoose = require('mongoose');


const connectDB = async (dbstring) => {
    try {
        const conn = await mongoose.connect(dbstring, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
