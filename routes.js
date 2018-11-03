const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Funcionando',
       message: 'DailyTrends',
    });
});

module.exports = router;