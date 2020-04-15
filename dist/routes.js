"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function callbackMessage(request, response) {
    var dataUser = CreateUser_1.default({
        name: 'Kramer',
        email: 'guilherme.kramer98@gmail.com',
        password: 'abcdefg',
        phones: [
            { number: '132456789', active: 1 },
            { number: '987654321', active: 0 },
        ]
    });
    return response.json(dataUser);
}
exports.callbackMessage = callbackMessage;
