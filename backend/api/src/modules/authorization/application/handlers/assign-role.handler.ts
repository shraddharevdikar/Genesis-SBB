import { Injectable, Inject } from '@nestjs/common';
import { AssignRoleCommand } from '../commands/assign-role.command.js';
import { IRoleRepository } from '../../domain/repositories/role-repository.interface.js';
import { RoleId } from '../../domain/value-objects/role-id.value-object.js';
import { RoleNotFoundException } from '../../domain/exceptions/role-not-found.exception.js';

@Injectable()
export class AssignRoleHandler {
  constructor(
    @Inject('IRoleRepository')
    private readonly roleRepository: IRoleRepository
  ) {}

  public async handle(command: AssignRoleCommand): Promise<void> {
    const roleId = new RoleId(command.roleId);
    const role = await this.roleRepository.findById(roleId);
    if (!role) {
      throw new RoleNotFoundException(command.roleId);
    }

    // Assigning logic simulation
    console.log(`Assigned role ${role.getName()} to user ${command.userId}`);
  }
}
