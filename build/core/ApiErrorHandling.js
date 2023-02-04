"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error_message = void 0;
var error_message;
(function (error_message) {
    error_message["not_found"] = "no results found";
    error_message["unauthorize"] = "Unauthorize";
    error_message["forbiden"] = "Forbiden";
    error_message["server_error"] = "Server Error";
})(error_message = exports.error_message || (exports.error_message = {}));
class ApiErrorHandling {
    // private readonly status : staus_code;
    // private readonly message : error_message;
    // private res : Response;
    returnErrorResponse(status, message, res, error) {
        res.status(status).json({ message: message, error: error });
    }
}
exports.default = ApiErrorHandling;
