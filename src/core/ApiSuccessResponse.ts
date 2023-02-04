import { Response } from "express";
import { error_message } from "./ApiErrorHandling";

export enum staus_code {
  ok = 200,
  created = 201,
  not_found = 404,
  bad_request = 400,
  server_error = 500,
}
export enum success_message {
  login = "User Login successfully",
  registered = "user registered successfully",
}

class ApiSuccessResponse {
  // private res;

  // constructor(res: Response) {
  //   this.res = res;
  // }
  returnSuccessResponse(
    res: Response,
    status: staus_code,
    message: success_message,
    data: object | Array<any>
  ): Response {
    return res.status(status).json({ message: message, data: data });
  }
}

export default ApiSuccessResponse;
