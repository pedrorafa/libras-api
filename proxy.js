var proxy = function proxy(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next()
}

module.exports = proxy
