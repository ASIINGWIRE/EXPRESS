const express = require('express')
const router = express.Router()

let routes = require('../Users')

// get all items in users file
router.get('/', (req,res) => {
    res.json(routes)
});

module.exports = router;
