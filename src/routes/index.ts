import { Router, Request, Response, NextFunction } from "express";
import routes from "./app-routes/index";
const router = Router();

router.use(
  "/api",
  (req: Request, res: Response, next: NextFunction) => {
    res.set("access-control-allow-origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.set("Access-Control-Allow-Credential", "true");

    next();
  },
  routes
);

export default router;
