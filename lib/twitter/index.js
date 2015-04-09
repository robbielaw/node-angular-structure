var Twit = require('twit'),
    cfg  = require('_/config');


function T(token, token_secret) {
  console.log(token);
  console.log(token_secret);

  return new Twit({
    consumer_key: cfg.twitter.key,
    consumer_secret: cfg.twitter.secret,
    access_token: token,
    access_token_secret: token_secret
  });
};

T.prototype.favourites = function() {
  this.get('favorites/list', function(err, data, response) {
    console.log(data)
  });
};


module.exports = new T;
