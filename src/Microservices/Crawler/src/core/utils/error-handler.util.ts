import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(
    response: string | Record<string, any>,
    status: number,
    private clientCode: number,
  ) {
    super(response, status);
  }

  getClientCode() {
    return this.clientCode;
  }
}

export class ForbiddenException extends BaseException {
  constructor() {
    const body = { success: false, message: 'permission denied' };
    super(body, HttpStatus.FORBIDDEN, 403);
  }
}

export class UnauthorizedException extends BaseException {
  constructor() {
    const body = { success: false, message: 'Unauthorized' };
    super(body, HttpStatus.UNAUTHORIZED, 401);
  }
}

export class EntityNotFoundException extends BaseException {
  constructor(msg?: any, error_code?: any) {
    const body = {
      success: false,
      message: msg ? msg : 'Resource not found',
      error_code: error_code ? error_code : 'RESOURCE_NOT_FOUND',
    };
    super(body, HttpStatus.NOT_FOUND, 404);
  }
}

export class BussinessException extends BaseException {
  constructor(msg: string, error_code?: any) {
    const body = {
      success: false,
      message: msg,
      error_code: error_code ? error_code : 'BUSINESS_EXCEPTION',
    };
    super(body, HttpStatus.BAD_REQUEST, 400);
  }
}

export class InvalidArgumentException extends BaseException {
  constructor(msg: string, error_code?: any) {
    const body = {
      success: false,
      message: msg,
      error_code: error_code ? error_code : 'INVALID_ARGUMENT_EXCEPTION',
    };
    super(body, HttpStatus.BAD_REQUEST, 400);
  }
}

export class TimeOutException extends BaseException {
  constructor(msg?: any, error_code?: any) {
    const body = {
      success: false,
      message: msg ? msg : 'Request Timeout',
      error_code: error_code ? error_code : 'REQUEST_TIMEOUT',
    };
    super(body, HttpStatus.REQUEST_TIMEOUT, 408);
  }
}
