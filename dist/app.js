"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
require('dotenv').config();
const app = (0, express_1.default)();
const server = new http_1.default.Server(app);
server.listen(process.env.PORT);
const getUsersController_1 = __importDefault(require("./controller/getUsersController"));
app.get('/users/all', getUsersController_1.default);
