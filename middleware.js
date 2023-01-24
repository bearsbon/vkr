const { secret } = require('./config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Нет токена' });
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    req.userId = decoded._id;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Нет доступа',
    });
  }
};
