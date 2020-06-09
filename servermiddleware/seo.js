const redirects = require('../301.json')

module.exports = function(req, res, next) {
  const redirect = redirects.find(r => r.from === req.url)
  if (redirect) {
    res.writeHead(301, {
      Location: `${redirect.to}?timestamp=${new Date().getTime()}`
    })
    res.end()
  } else {
    next()
  }
}
