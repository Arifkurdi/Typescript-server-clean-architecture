"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success_message = exports.staus_code = void 0;
var staus_code;
(function (staus_code) {
    staus_code[staus_code["ok"] = 200] = "ok";
    staus_code[staus_code["created"] = 201] = "created";
    staus_code[staus_code["not_found"] = 404] = "not_found";
    staus_code[staus_code["server_error"] = 500] = "server_error";
})(staus_code = exports.staus_code || (exports.staus_code = {}));
var success_message;
(function (success_message) {
    success_message["login"] = "User Login successfully";
    success_message["registered"] = "user registered successfully";
})(success_message = exports.success_message || (exports.success_message = {}));
class ApiSuccessResponse {
    returnErrorResponse(status, message, res) {
        res.status(status).json({ message: message });
    }
}
exports.default = ApiSuccessResponse;
