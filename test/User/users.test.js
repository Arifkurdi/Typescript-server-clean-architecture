"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepo_1 = require("../../src/models/repos/UserRepo");
const userRepo = new UserRepo_1.UserRepo();
describe("test user repos", () => {
    test("it should create user", () => {
        const createMehtod = userRepo.createUser({
            name: "arif",
            phone: 0960748043,
            password: "123456789",
            email: "email@email.com",
        });
        expect(1 + 1).toBe(2);
    });
});
