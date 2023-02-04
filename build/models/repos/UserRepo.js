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
exports.UserRepo = void 0;
const UserModel_1 = __importDefault(require("../schemas/UserModel"));
const tokens_1 = __importDefault(require("../../utilis/tokens"));
const tokens = new tokens_1.default();
class UserRepo {
    //   private req: Request;
    //   constructor(req: Request) {
    //     this.req = req;
    //   }
    checkIfUserExists(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findOne({ where: { phone: phone } });
            if (!user)
                return false;
            return true;
        });
    }
    fetchUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield UserModel_1.default.findAll();
            return users;
        });
    }
    fetchUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.default.findByPk(userId);
            return user;
        });
    }
    createUser({ name, phone, password, email, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = tokens.createToken({
                name,
                phone,
                email,
                role: "user",
            });
            const user = yield UserModel_1.default.create({
                name,
                phone,
                password,
                email,
                accessToken,
                status: "panding",
            });
            return user;
        });
    }
}
exports.UserRepo = UserRepo;
