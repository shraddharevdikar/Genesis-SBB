import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';
import { Schema } from 'zod';
import { ValidationError, ZodValidatable } from '@sbb/shared';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema?: Schema) {}

  public transform(value: unknown, metadata: ArgumentMetadata): any {
    let schemaToUse = this.schema;

    // Dynamically discover Zod schema from metatype if not statically bound
    if (!schemaToUse && metadata.metatype) {
      const metatype = metadata.metatype as any;
      if (typeof metatype.getSchema === 'function') {
        schemaToUse = metatype.getSchema();
      } else if (metatype.prototype && typeof metatype.prototype.getSchema === 'function') {
        try {
          const instance = Object.create(metatype.prototype);
          schemaToUse = instance.getSchema();
        } catch {
          // Fallback if instantiation is not possible
        }
      }
    }

    if (!schemaToUse) {
      return value;
    }

    try {
      return schemaToUse.parse(value);
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
