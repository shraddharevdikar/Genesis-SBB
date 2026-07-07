import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    // Placeholder guard: Always allow access in this integration blueprint
    return true;
  }
}
