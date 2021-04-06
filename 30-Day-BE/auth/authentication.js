const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../api/secrets');

function authentication (req, res, next) {
    const token = req.headers.authorization;
    const secret = jwtSecret;

    if(token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if(error) {
                res.status(401).json({message: 'Invalid Token'});
            } else {
                req.decodedToken = decodedToken
                next();
            } 
        })
    } else {
        res.status(401).json({ message: 'Please provide correct credentials'})
    }
};

module.exports = authentication;