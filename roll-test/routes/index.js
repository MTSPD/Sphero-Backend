var express = require('express');
var router = express.Router();

const {action, light} = require('../controller/myaction')

router.post('/api/control', function(req, res, next) {
    const deg = req.body.dir == 1 ? 0 : 180;
    action(deg);
    res.send('sucess');
});

router.post('/api/color', function(req, res, next) {
    const color = req.body.col;
    light(color);
    res.send('success');
})

module.exports = router;

