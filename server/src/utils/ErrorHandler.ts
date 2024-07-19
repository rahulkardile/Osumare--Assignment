import { CustomError } from "../types/types.js";

export default function (statusCode: number, message: string) {
    const err: CustomError = new Error();
    err.statusCode = statusCode;
    err.message = message;
    return err;
}