import express from 'express';
import feedRoutes from './routes/feed.route';
const router = require('express').Router();


router.get('/', function (req, res) {
    res.json({
       status: 'API Funcionando',
       message: 'DailyTrends',
    });
});

router.use('/feed', feedRoutes);

module.exports = router;