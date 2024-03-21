// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const signupUser = require('../controllers/signup');
const loginUser = require('../controllers/login');
const getCountry = require('../controllers/getCountry');
const authToken = require('../middlewares/authMiddleware');
const getCountryList = require('../controllers/countryList');

// Signup Route
router.post('/signup', signupUser);

// Login Route
router.post('/login', loginUser);

// Get Country Route
router.get('/country/:name', authToken, getCountry);

// Get Country Route
router.get('/countries', authToken, getCountryList);

module.exports = router;
