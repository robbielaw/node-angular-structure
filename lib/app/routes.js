var express = require('express'),
    router  = express.Router(),
    ctrl    = require('./controllers');


router.get('/*', ctrl.index);

module.exports = router;
