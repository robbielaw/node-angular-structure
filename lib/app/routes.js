var // NPM modules
    express  = require('express'),
    passport = require('passport'),
    router   = express.Router(),
    // App modules
    ctrl    = require('./controllers');


router.get('/', ctrl.index);
router.get('/login', ctrl.login);

// API
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));


module.exports = router;
