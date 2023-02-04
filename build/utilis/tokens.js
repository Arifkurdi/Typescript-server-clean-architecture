"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Tokens {
    createToken({ name, phone, email, role }) {
        const token = jsonwebtoken_1.default.sign({ name, phone, email, role }, "helloWorld", {
            expiresIn: "30d",
        });
        return token;
    }
}
exports.default = Tokens;
