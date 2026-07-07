import { AggregateRoot } from '@sbb/shared';
import { TeamId } from '../value-objects/team-id.value-object';
import { TeamName } from '../value-objects/team-name.value-object';
import { TeamCreatedEvent } from '../events/team-created.event';
import { TeamRenamedEvent } from '../events/team-renamed.event';
import { TeamArchivedEvent } from '../events/team-archived.event';

export enum TeamStatus {
  Active = 'Active',
  Archived = 'Archived',
}

export class Team extends AggregateRoot {
  private readonly id: TeamId;
  private readonly organizationId: string;
  private name: TeamName;
  private status: TeamStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: TeamId,
    organizationId: string,
    name: TeamName,
    status: TeamStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    super();
    if (!organizationId || organizationId.trim() === '') {
      throw new Error('Organization ID is required');
    }

    this.id = id;
    this.organizationId = organizationId;
    this.name = name;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public getId(): TeamId {
    return this.id;
  }

  public getOrganizationId(): string {
    return this.organizationId;
  }

  public getName(): TeamName {
    return this.name;
  }

  public getStatus(): TeamStatus {
    return this.status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public static create(
    id: TeamId,
    organizationId: string,
    name: TeamName
  ): Team {
    const team = new Team(
      id,
      organizationId,
      name,
      TeamStatus.Active,
      new Date(),
      new Date()
    );

    team.addDomainEvent(
      new TeamCreatedEvent(id.getValue(), organizationId, name.getValue())
    );

    return team;
  }

  public rename(newName: TeamName): void {
    if (this.name.equals(newName)) {
      return;
    }
    const oldName = this.name.getValue();
    this.name = newName;
    this.updatedAt = new Date();
    this.addDomainEvent(
      new TeamRenamedEvent(this.id.getValue(), oldName, newName.getValue())
    );
  }

  public archive(): void {
    if (this.status === TeamStatus.Archived) {
      return;
    }
    this.status = TeamStatus.Archived;
    this.updatedAt = new Date();
    this.addDomainEvent(new TeamArchivedEvent(this.id.getValue()));
  }
}
