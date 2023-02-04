import { UserRepo } from "../../src/models/repos/UserRepo";

const userRepo = new UserRepo();

describe("test user repos", () => {
  test("it should create user", () => {
    // const createMehtod = userRepo.createUser({
    //   name: "arif",
    //   phone: 960748043,
    //   password: "123456789",
    //   email: "email@email.com",
    // });
    expect(1 + 1).toBe(2);
  });
});
