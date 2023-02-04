import { Request, Response } from "express";
import ApiErrorHandling, { error_message } from "../core/ApiErrorHandling";
import { UserRepo, create_user } from "../models/repos/UserRepo";
import { Model } from "sequelize";
import bcrypt from "bcrypt";
import Tokens from "../utilis/tokens";
import ApiSuccessResponse, {
  success_message,
} from "../core/ApiSuccessResponse";

// interface create_user_schema {
//   phone: number;
//   password: string;
// }

// const apiError = new ApiErrorHandling();
const tokens = new Tokens();
const userRepo = new UserRepo();
const successResponseHandling = new ApiSuccessResponse();
const errorResponseHandling = new ApiErrorHandling();
class Auth {
  private async hashPassword(password: any): Promise<string> {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }
  private async handleRegisteration(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { name, phone, email, password }: create_user = req.body;
    const isUserExists = await userRepo.checkIfUserExists(phone);

    if (isUserExists)
      errorResponseHandling.returnErrorResponse(
        res,
        400,
        "phone number exists aleardy",
        "can not use this phone number"
      );

    const hashedPassword = this.hashPassword(password);

    const accessToken = tokens.createToken({
      name,
      phone,
      email,
      role: "user",
    });
    const user = await userRepo.createUser({
      name,
      phone,
      password: hashedPassword,
      email,
      accessToken,
    });

    return successResponseHandling.returnSuccessResponse(
      res,
      201,
      success_message.registered,
      user
    );
  }

  public async register(req: Request, res: Response): Promise<Response> {
    try {
      return await this.handleRegisteration(req, res);
    } catch (error: any) {
      return errorResponseHandling.returnErrorResponse(
        res,
        500,
        error_message.server_error,
        error.message
      );
    }
  }
}

export default Auth;
