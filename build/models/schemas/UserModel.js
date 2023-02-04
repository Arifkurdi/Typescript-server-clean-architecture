"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../config/database"));
const UserModel = database_1.default.define("users", {
    id: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER({ length: 12 }),
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    accessToken: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["active", "panding", "blocked"],
        defaultValue: "panding",
    },
    role: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
    },
}, {
    charset: "utf8-general-ci",
});
exports.default = UserModel;
