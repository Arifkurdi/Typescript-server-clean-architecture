import { Response } from "express";
import { staus_code } from "./ApiSuccessResponse";

export enum error_message {
  not_found = "no results found",
  unauthorize = "Unauthorize",
  forbiden = "Forbiden",
  server_error = "Server Error",
}

class ApiErrorHandling {
  // private readonly status : staus_code;
  // private readonly message : error_message;
  // private res: Response;

  // constructor(res: Response) {
  //   this.res = res;
  // }

  public returnErrorResponse(
    res: Response,
    status: number,
    message: string,
    error: string
  ): Response {
    return res.status(status).json({ message: message, error: error });
  }
}

export default ApiErrorHandling;
