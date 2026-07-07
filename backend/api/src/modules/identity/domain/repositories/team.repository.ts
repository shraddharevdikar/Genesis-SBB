import { Team } from '../entities/team.entity';
import { TeamId } from '../value-objects/team-id.value-object';
import { TeamName } from '../value-objects/team-name.value-object';

export interface ITeamRepository {
  findById(id: TeamId): Promise<Team | null>;
  findByNameAndOrg(name: TeamName, organizationId: string): Promise<Team | null>;
  save(team: Team): Promise<void>;
  delete(id: TeamId): Promise<void>;
}
