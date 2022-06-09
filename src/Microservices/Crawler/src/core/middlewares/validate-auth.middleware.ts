import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class ValidateAuthMiddleware extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new UnprocessableEntityException(
          ValidateAuthMiddleware.handleError('Unauthorized'),
        );
      }
    }
  }

  private static handleError(errors) {
    return errors.map((error) => error.constraints);
  }
}
