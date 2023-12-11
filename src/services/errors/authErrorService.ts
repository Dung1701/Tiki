import { BaseError } from './base';
import { AuthException, HttpStatus } from '@/common/enum';
class AuthErrorsService extends BaseError {
  constructor(key: AuthException, message?: string, code?: HttpStatus) {
    super({
      code: code || 401,
      type: key,
      message,
    });
  }
}
export class AuthExceptionService {
  tokenMissing(): any {
    throw new Error('Method not implemented.');
  }
  public tokenInvalid() {
    return new AuthErrorsService(AuthException.TOKEN_EXPIRED, 'Token is invalid.', HttpStatus.UNAUTHORIZED);
  }

  public invalidCredentials() {
    return new AuthErrorsService(AuthException.INVALID_CREDENTIALS, 'Invalid username or password.', HttpStatus.UNAUTHORIZED);
  }

  public unAuthorized() {
    return new AuthErrorsService(AuthException.UNAUTHORIZED, null, HttpStatus.UNAUTHORIZED);
  }
  public permissionDeny() {
    return new AuthErrorsService(AuthException.PERMISSION_DENY, null, HttpStatus.FORBIDDEN);
  }
  public badToken() {
    return new AuthErrorsService(AuthException.BAD_TOKEN, null, HttpStatus.FORBIDDEN);
  }
  public tokenExpired() {
    return new AuthErrorsService(AuthException.TOKEN_EXPIRED, null, HttpStatus.FORBIDDEN);
  }
  public customError(message?: string, code?: HttpStatus) {
    return new AuthErrorsService(AuthException.CUSTOM, message, code);
  }
  public badRefreshToken() {
    return new AuthErrorsService(AuthException.BAD_REFRESH_TOKEN, 'Bad Refresh Token', HttpStatus.CONFLICT);
  }
  public refreshTokenExpired() {
    return new AuthErrorsService(AuthException.TOKEN_EXPIRED, 'Refresh Token Expired', HttpStatus.CONFLICT);
  }
}
