import UserModel from "../schemas/UserModel";
import { Request, Response } from "express";
import { Model } from "sequelize";
import Tokens from "../../utilis/tokens";
import ApiErrorHandling from "../../core/ApiErrorHandling";
// import bcrypy from "b"
export interface create_user {
  name: string;
  phone: number;
  password: Promise<string>;
  email: string;
  accessToken: string;
}

type User = {
  name: string;
  phone: number;
  email: string;
  role: string;
};

const tokens = new Tokens();
export class UserRepo {
  private publicUserData(user: Model<any, any> | any): User {
    const userData: User = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      role: user.role,
    };

    return userData;
  }
  private publicUsersData(users: Array<Model<any, any>[] | any>): Array<User> {
    let usersContainer: Array<User> = [];
    users.map((user: User) => {
      usersContainer.push({
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      });
    });

    return usersContainer;
  }
  public async checkIfUserExists(phone: number): Promise<boolean> {
    const user = await UserModel.findOne({ where: { phone: phone } });

    if (!user) return false;

    return true;
  }

  public async fetchUsers(): Promise<User[]> {
    const users = await UserModel.findAll();
    return this.publicUsersData(users);
  }

  public async fetchUser(userId: number): Promise<User> {
    const user = await UserModel.findByPk(userId);
    return this.publicUserData(user);
  }

  public async createUser({
    name,
    phone,
    password,
    email,
    accessToken,
  }: create_user): Promise<User> {
    const user = await UserModel.create({
      name,
      phone,
      password,
      email,
      accessToken,
      status: "panding",
    });

    return this.publicUserData(user);
  }
}
