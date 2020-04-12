const express = require('express');
const router = express.Router();
const Watch = require('../main/Models/Watch');
const productArray = require('../bin/seeds');

//seed db
router.get("/seed-my-db", async (req, res, next) => {
    try {
        await productArray.map(product => {
             return product.create(product);
        });

    } catch(err) {
        res.status(500).json(err); 
    }
});
 module.exports = router;