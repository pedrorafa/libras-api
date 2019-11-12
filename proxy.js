var proxy = function proxy(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next()
}

module.exports = proxy
