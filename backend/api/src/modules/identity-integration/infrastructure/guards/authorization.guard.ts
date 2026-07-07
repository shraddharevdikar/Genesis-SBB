import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    // Placeholder guard: Always allow authorization in this integration blueprint
    return true;
  }
}
