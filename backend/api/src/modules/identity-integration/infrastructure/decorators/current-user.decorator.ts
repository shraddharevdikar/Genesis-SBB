import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // Placeholder decorator: Return empty/mock user object
    return {
      id: 'usr_placeholder',
      username: 'guest',
      email: 'guest@sbb.local',
      roles: ['guest'],
    };
  }
);
