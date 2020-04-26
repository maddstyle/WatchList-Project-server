const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.json({ error: 'token not provided' })

  const [, token] = authHeader.split(' ')
  // const decoded = await promisify(jwt.verify)(token, 'bobcat')
  try {
    const decoded = await promisify(jwt.verify)(token, 'bobcat')
    req.userId = decoded.id
    return next()
  } catch (err) {
    res.status(401).json()
  }
}