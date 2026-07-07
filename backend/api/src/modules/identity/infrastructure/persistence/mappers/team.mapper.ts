import { Team, TeamStatus } from '../../../domain/entities/team.entity';
import { TeamId } from '../../../domain/value-objects/team-id.value-object';
import { TeamName } from '../../../domain/value-objects/team-name.value-object';

export class TeamMapper {
  public static toDomain(raw: any): Team {
    return new Team(
      new TeamId(raw.id),
      raw.organizationId,
      new TeamName(raw.name),
      raw.status as TeamStatus,
      new Date(raw.createdAt),
      new Date(raw.updatedAt)
    );
  }

  public static toPersistence(domain: Team): any {
    return {
      id: domain.getId().getValue(),
      organizationId: domain.getOrganizationId(),
      name: domain.getName().getValue(),
      status: domain.getStatus().toString(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    };
  }
}
