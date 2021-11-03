import express from 'express';
import http from 'http';

require('dotenv').config()

const app = express();
const server = new http.Server(app);
server.listen(process.env.PORT)

import getUsersController from './controller/getUsersController'

app.get('/users/all', getUsersController)