import { Application, Request, Response } from "express";
import express from "express";
import router from "./routes/index";
import bodyParser from "body-parser";
import database from "./config/database";
const app: Application = express();
const port: number = 8001;

// app.use("/", (req: Request, res: Response): Response => {
//   return res.status(200).json({ message: "Hello World" });
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
export function sum(a: number, b: number): number {
  return a + b;
}
database
  .sync()
  .then(() => app.listen(port, () => console.log(`listening on port ${port}!`)))
  .catch((error) => console.log(error));
