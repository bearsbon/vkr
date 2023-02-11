const { secret } = require('./config');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    // отделяем Bearer из Authorization
    // const token = req.headers.authorization.split(' ')[1];

    const token = req.headers.authorization;

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
