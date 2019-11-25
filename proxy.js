var jwt = require('jsonwebtoken')
var url = require('url')

var proxy = function proxy(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  
  
  if (req.path.includes('auth'))
    next()
  else {
    var params = url.parse(req.url, true)
    var token = params.query['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.API_SECRET, function (err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }
}
module.exports = proxy
