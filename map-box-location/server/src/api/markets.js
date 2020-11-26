const { Router } = require('express');

const Market = require('../models/Market');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const markets = await Market.find();
    res.json(markets);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newMarket = new Market(req.body);
    const createdMarket = await newMarket.save();
    res.json(createdMarket);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
