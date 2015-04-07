var // App modules
    cfg    = require('_/config'),
    logger = require('_/log');


// Public
module.exports = {

    index: function(req, res) {
        res.sendFile(cfg.viewDir + '/index.html');
    }

};
