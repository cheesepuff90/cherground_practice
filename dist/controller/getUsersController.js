"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsersController = (request, response) => {
    const users = [
        {
            name: 'DON',
            age: 13
        },
        {
            name: 'CHER',
            age: 19
        }
    ];
    response.statusCode = 200;
    response.send({
        users: users
    });
};
exports.default = getUsersController;
