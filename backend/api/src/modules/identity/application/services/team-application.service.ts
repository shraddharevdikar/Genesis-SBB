import { Injectable, Inject } from '@nestjs/common';
import { ITeamRepository } from '../../domain/repositories/team.repository';
import { TeamId } from '../../domain/value-objects/team-id.value-object';
import { TeamName } from '../../domain/value-objects/team-name.value-object';

@Injectable()
export class TeamApplicationService {
  constructor(
    @Inject('ITeamRepository')
    private readonly teamRepository: ITeamRepository
  ) {}

  public async getTeamById(id: string): Promise<any> {
    const team = await this.teamRepository.findById(new TeamId(id));
    if (!team) {
      return null;
    }
    return {
      id: team.getId().getValue(),
      organizationId: team.getOrganizationId(),
      name: team.getName().getValue(),
      status: team.getStatus(),
      createdAt: team.getCreatedAt(),
      updatedAt: team.getUpdatedAt(),
    };
  }

  public async renameTeam(id: string, newName: string): Promise<void> {
    const team = await this.teamRepository.findById(new TeamId(id));
    if (!team) {
      throw new Error(`Team with ID ${id} not found`);
    }
    team.rename(new TeamName(newName));
    await this.teamRepository.save(team);
  }

  public async archiveTeam(id: string): Promise<void> {
    const team = await this.teamRepository.findById(new TeamId(id));
    if (!team) {
      throw new Error(`Team with ID ${id} not found`);
    }
    team.archive();
    await this.teamRepository.save(team);
  }
}
