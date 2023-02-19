import { StatusCodes } from "http-status-codes";

class ApiError extends Error {
  constructor(message: string, public readonly statusCode: number) {
    super(message);
  }
}

export class Bad_Request extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class Unauthorized extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class Not_Found extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class Internal_Server_Error extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
