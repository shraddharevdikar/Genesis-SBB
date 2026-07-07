export class DuplicateTeamException extends Error {
  constructor(teamName: string, organizationId: string) {
    super(`Team with name '${teamName}' already exists in organization '${organizationId}'.`);
    this.name = 'DuplicateTeamException';
  }
}
