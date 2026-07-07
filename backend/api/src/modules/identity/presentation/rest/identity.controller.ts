import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { IdentityApplicationService } from '../../application/services/identity-application.service';

@Controller('v1/identity')
export class IdentityController {
  constructor(
    private readonly identityAppService: IdentityApplicationService
  ) {}

  @Get(':id')
  public async getIdentity(@Param('id') id: string): Promise<any> {
    const result = await this.identityAppService.getIdentityById(id);
    if (!result) {
      throw new NotFoundException(`Identity not found`);
    }
    return result;
  }
}
