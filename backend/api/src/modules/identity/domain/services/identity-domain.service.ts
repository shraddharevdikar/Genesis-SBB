import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentityDomainService {
  constructor() {}

  public validateIdentityPolicy(): boolean {
    return true;
  }
}
