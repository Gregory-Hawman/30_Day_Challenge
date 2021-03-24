const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/userRouter');
const authRouter = require('../auth/authRouter');
const { authMiddleware } = require('../auth/authMiddleware');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', authMiddleware, userRouter)