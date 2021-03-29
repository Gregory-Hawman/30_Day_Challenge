const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/userRouter');
const authRouter = require('../auth/authRouter');
const authentication = require('../auth/authentication');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', authentication, userRouter);

server.get('/', (req, res) => {
    res.json({api: 'API is up'})
});

module.exports = server;