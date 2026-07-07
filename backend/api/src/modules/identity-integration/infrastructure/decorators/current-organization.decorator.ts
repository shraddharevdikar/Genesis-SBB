import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentOrganization = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // Placeholder decorator: Return empty/mock organization object
    return {
      id: 'org_placeholder',
      name: 'Default Organization',
    };
  }
);
