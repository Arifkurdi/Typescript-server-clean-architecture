"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const port = 8001;
// app.use("/", (req: Request, res: Response): Response => {
//   return res.status(200).json({ message: "Hello World" });
// });
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
database_1.default
    .sync()
    .then(() => app.listen(port, () => console.log(`listening on port ${port}!`)))
    .catch((error) => console.log(error));
