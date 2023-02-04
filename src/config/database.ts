import { Sequelize } from "sequelize";

const database = new Sequelize("mega_store", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default database;
