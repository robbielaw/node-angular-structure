var // NPM modules
    TwitterStrategy = require('passport-twitter').Strategy,
    // App modules
    cfg             = require('_/config'),
    keys            = require('./keys');
    
    
module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(new TwitterStrategy({
        consumerKey: keys.key,
        consumerSecret: keys.secret,
        callbackURL: cfg.callback_url + "/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
          var user = {
              id: profile.id,
              username: profile.displayName
          };
          
          done(null, user);
      }
    ));
    
};
