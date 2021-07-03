const express = require('express');
const router = express.Router();

const UserRouter = require('../routers/users');

function route(app){

    app.use('/users', UserRouter);

}

module.exports = route;