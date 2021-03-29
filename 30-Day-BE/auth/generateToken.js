const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../api/secrets');

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const secret = jwtSecret;
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload,secret, options)
};

module.exports = generateToken;