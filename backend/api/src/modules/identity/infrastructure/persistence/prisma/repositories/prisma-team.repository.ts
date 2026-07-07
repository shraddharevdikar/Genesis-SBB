import { Injectable } from '@nestjs/common';
import { ITeamRepository } from '../../../../domain/repositories/team.repository';
import { Team } from '../../../../domain/entities/team.entity';
import { TeamId } from '../../../../domain/value-objects/team-id.value-object';
import { TeamName } from '../../../../domain/value-objects/team-name.value-object';
import { TeamMapper } from '../../mappers/team.mapper';

@Injectable()
export class PrismaTeamRepository implements ITeamRepository {
  private readonly storage = new Map<string, any>();

  public async findById(id: TeamId): Promise<Team | null> {
    const raw = this.storage.get(id.getValue());
    if (!raw) {
      return null;
    }
    return TeamMapper.toDomain(raw);
  }

  public async findByNameAndOrg(
    name: TeamName,
    organizationId: string
  ): Promise<Team | null> {
    for (const raw of this.storage.values()) {
      if (
        raw.organizationId === organizationId &&
        raw.name.toLowerCase() === name.getValue().toLowerCase()
      ) {
        return TeamMapper.toDomain(raw);
      }
    }
    return null;
  }

  public async save(team: Team): Promise<void> {
    const raw = TeamMapper.toPersistence(team);
    this.storage.set(team.getId().getValue(), raw);
  }

  public async delete(id: TeamId): Promise<void> {
    this.storage.delete(id.getValue());
  }
}
