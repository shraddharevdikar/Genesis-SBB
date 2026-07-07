import { Inject, Injectable } from '@nestjs/common';
import { CreateTeamCommand } from '../commands/create-team.command';
import { ITeamRepository } from '../../domain/repositories/team.repository';
import { TeamDomainService } from '../../domain/services/team-domain.service';
import { Team } from '../../domain/entities/team.entity';
import { TeamId } from '../../domain/value-objects/team-id.value-object';
import { TeamName } from '../../domain/value-objects/team-name.value-object';

@Injectable()
export class CreateTeamHandler {
  constructor(
    @Inject('ITeamRepository')
    private readonly teamRepository: ITeamRepository,
    private readonly teamDomainService: TeamDomainService
  ) {}

  public async handle(command: CreateTeamCommand): Promise<string> {
    const teamName = new TeamName(command.name);
    await this.teamDomainService.assertNameIsUniqueInOrg(
      teamName,
      command.organizationId
    );

    const idValue = 'tem_' + Math.random().toString(36).substring(2, 11);
    const teamId = new TeamId(idValue);

    const team = Team.create(
      teamId,
      command.organizationId,
      teamName
    );

    await this.teamRepository.save(team);

    return team.getId().getValue();
  }
}
