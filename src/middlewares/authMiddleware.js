const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]; //Bearer token
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(401).json({ error: "Null token" })
    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if (error) return res.status(403).json({ error: error.message });
            req.user = user;
            next();
        });
    } catch (err) {
        console.error('Token verification error:', err); // Log the error
        res.status(401).json({ msg: 'Token is not valid' });
    }
}; // <-- Missing closing curly brace

module.exports = authToken;
