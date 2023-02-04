"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepo_1 = __importDefault(require("../models/repos/UserRepo"));
// interface create_user_schema {
//   phone: number;
//   password: string;
// }
// const apiError = new ApiErrorHandling();
const UserController = new UserRepo_1.default();
class Auth {
    Register(reqBody, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = UserController.createUser(reqBody);
                res.status(201).json({ message: "user created successfully", user });
            }
            catch (error) {
                res.status(500).json({ message: "Server Error", error: error.message });
            }
        });
    }
}
exports.default = Auth;
