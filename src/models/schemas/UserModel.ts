import { DataTypes } from "sequelize";
import database from "../../config/database";

export interface User {
  id?: number;
  name: string;
  phone: number;
  email: string;
  password: string;
  status: boolean;
  role: string;
  accessToken: string;
}

const UserModel = database.define(
  "users",
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER({ length: 12 }),
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    accessToken: {
      type: DataTypes.STRING,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "panding", "blocked"],
      defaultValue: "panding",
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "user"],
      defaultValue: "user",
    },
  },
  {
    charset: "utf8-general-ci",
  }
);

export default UserModel;
