export enum MembershipRoleType {
  Owner = 'Owner',
  Admin = 'Admin',
  Manager = 'Manager',
  Member = 'Member',
  Viewer = 'Viewer',
}

export class MembershipRole {
  private readonly value: MembershipRoleType;

  constructor(value: string) {
    if (!value) {
      throw new Error('Membership role cannot be empty');
    }

    const matchedRole = Object.values(MembershipRoleType).find(
      (r) => r.toLowerCase() === value.trim().toLowerCase()
    );

    if (!matchedRole) {
      throw new Error(`Invalid membership role: '${value}'. Must be one of: Owner, Admin, Manager, Member, Viewer`);
    }

    this.value = matchedRole;
  }

  public getValue(): MembershipRoleType {
    return this.value;
  }

  public equals(other: MembershipRole): boolean {
    return this.value === other.getValue();
  }
}
