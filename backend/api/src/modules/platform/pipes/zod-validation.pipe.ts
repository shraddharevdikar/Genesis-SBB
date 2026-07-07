import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';
import { Schema } from 'zod';
import { ValidationError } from '@sbb/shared';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema) {}

  public transform(value: unknown, metadata: ArgumentMetadata): any {
    try {
      return this.schema.parse(value);
    } catch (error: any) {
      if (error && error.errors) {
        const errorDetails = error.errors.map((e: any) => ({
          field: e.path.join('.'),
          message: e.message,
          code: e.code,
        }));
        throw new ValidationError('Validation failed', errorDetails);
      }
      throw new ValidationError(error.message || 'Validation failed');
    }
  }
}
