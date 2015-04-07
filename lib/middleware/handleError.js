module.exports = function (err, req, res, next) {
  res.locals.error = err;
  res.status(500).render('500')
};
