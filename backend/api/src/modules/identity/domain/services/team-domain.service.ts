import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from '../repositories/team.repository';
import { TeamName } from '../value-objects/team-name.value-object';
import { DuplicateTeamException } from '../exceptions/duplicate-team.exception';

@Injectable()
export class TeamDomainService {
  constructor(
    @Inject('ITeamRepository')
    private readonly teamRepository: ITeamRepository
  ) {}

  /**
   * Enforces that a team name must be unique within the same organization.
   */
  public async assertNameIsUniqueInOrg(name: TeamName, organizationId: string): Promise<void> {
    const existingTeam = await this.teamRepository.findByNameAndOrg(
      name,
      organizationId
    );
    if (existingTeam) {
      throw new DuplicateTeamException(name.getValue(), organizationId);
    }
  }
}
