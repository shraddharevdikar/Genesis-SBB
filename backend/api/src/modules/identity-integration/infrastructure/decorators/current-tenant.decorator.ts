import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentTenant = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // Placeholder decorator: Return empty/mock tenant object
    return {
      id: 'ten_placeholder',
      name: 'Default Tenant',
      code: 'DEFAULT',
    };
  }
);
