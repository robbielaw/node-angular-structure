var cfg = require('_/config');


module.exports = function (err, req, res, next) {
  console.log(err);
  res.locals.error = err;
  res.status(500).sendFile(cfg.viewDir + '/500.html');
};
