const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const mapController = require('../controllers/maps.controller');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({ min:4 }),
    authMiddleware.authUser, mapController );

module.exports = router;