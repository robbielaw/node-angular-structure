var // NPM modules
    passport        = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    // App modules
    cfg             = require('_/config');
    

passport.use(new TwitterStrategy({
    consumerKey: cfg.twitter.key,
    consumerSecret: cfg.twitter.secret,
    callbackURL: cfg.callback_url + "/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
      console.log(token);
      console.log(tokenSecret);
      console.log(profile);
      
      // put into session?
      
      // done(null, user);
  }
));


module.exports = passport;
