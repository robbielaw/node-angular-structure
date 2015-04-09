var // NPM modules
    express = require('express'),
    router  = express.Router(),
    ctrl    = require('./controllers'),
    // App modules
    auth    = require('_/authentication');


router.get('/', ctrl.index);
router.get('/login', ctrl.login);

// API
router.get('/auth/twitter', auth.authenticate('twitter'));
router.get('/auth/twitter/callback', auth.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));


module.exports = router;
