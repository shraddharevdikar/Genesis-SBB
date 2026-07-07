import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    // Placeholder guard: Always allow tenant access in this integration blueprint
    return true;
  }
}
