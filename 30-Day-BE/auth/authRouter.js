const router = require('express').Router();
const bcrypt = require('bcryptjs');

const generateToken = require('./generateToken');
const { rounds } = require('../api/secrets');
const Users = require('../users/userModels');

// REGISTER === REGISTER === REGISTER === REGISTER === REGISTER === //
router.get('/register', (req, res) => {
    res.json({ api: "a get request to /register brings you here. post to add a new user" });
});

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;

    Users.addUser(user)
        .then(newUser => {
            const token = generateToken(user);
            res.status(201).json({
                message: `Successful Registration, Welcome ${user.username}!`,
                newUser: newUser,
                token: token,
            });
        })
        .catch(error => {
            res.status(500).json({ message: 'error occurred registering user', error });
        });
});

// === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN === LOGIN === //
router.get('/login', (req, res) => {
    res.json({ api: "a get request to /login brings you here. 'post' to login a user" });
});
  
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findUserBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Welcome ${user.name}!`,
                    user: user, 
                    token: token, 
                });
            } else {
                res.status(401).json({ 
                    message: 'Invalid username or password' 
                });
            }
        })
    .catch(error => {
        console.log(error);
        res.status(500).json({ 
            message: 'Server Error occurred during login',
            error: error.message  
        });
    });
});
  
module.exports = router;