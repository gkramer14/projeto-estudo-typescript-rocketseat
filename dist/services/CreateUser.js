"use strict";
/*
 * Cria: Name, Email, Password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, phones = _a.phones;
    var user = {
        name: name,
        email: email,
        password: password,
        phones: phones,
    };
    return user;
}
exports.default = CreateUser;
