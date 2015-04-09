var session    = require('express-session'),
    RedisStore = require('connect-redis')(session);


module.exports = function(url, secret) {

    var store = new RedisStore({ url: url });
    
    var session = session({
        secret: secret,
        store: store,
        resave: true, 
        saveUninitialized: true
    });
    
    return session;
    
};
