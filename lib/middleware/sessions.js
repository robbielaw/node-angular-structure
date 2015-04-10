var cfg = require('_/config');
    

module.exports = function(express_session, redis) {

    var store = new redis({ url: cfg.redis_url });
    
    var session = express_session({
        secret: cfg.cookie_secret,
        store: store,
        resave: true, 
        saveUninitialized: true
    });
    
    return session;
    
};
