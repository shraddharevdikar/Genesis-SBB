import { UserRole, UserStatus } from '@sbb/types';
import { TestClock, TestUuids } from '../helpers/index.js';
import { mockUserFixture, mockTenantFixture, mockOrganizationFixture } from '../fixtures/index.js';

export class UserBuilder {
  private user = { ...mockUserFixture };

  public withId(id: string): this {
    this.user.id = id;
    return this;
  }

  public withEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  public withName(firstName: string, lastName: string): this {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.displayName = `${firstName} ${lastName}`;
    return this;
  }

  public withRole(role: UserRole): this {
    this.user.role = role;
    return this;
  }

  public withStatus(status: UserStatus): this {
    this.user.status = status;
    return this;
  }

  public withMfa(enabled: boolean): this {
    this.user.mfaEnabled = enabled;
    return this;
  }

  public deleted(): this {
    this.user.deletedAt = TestClock.nowIso();
    return this;
  }

  public build() {
    return {
      ...this.user,
      updatedAt: TestClock.nowIso(),
    };
  }
}

export class TenantBuilder {
  private tenant = { ...mockTenantFixture };

  public withId(id: string): this {
    this.tenant.id = id;
    return this;
  }

  public withName(name: string): this {
    this.tenant.name = name;
    return this;
  }

  public withDomain(domain: string): this {
    this.tenant.domain = domain;
    return this;
  }

  public withBillingPlan(plan: 'free' | 'growth' | 'enterprise'): this {
    this.tenant.billingPlan = plan;
    return this;
  }

  public withLimits(maxUsers: number, storageLimitGb: number): this {
    this.tenant.settings = {
      ...this.tenant.settings,
      maxUsers,
      storageLimitGb,
    };
    return this;
  }

  public build() {
    return {
      ...this.tenant,
      updatedAt: TestClock.nowIso(),
    };
  }
}

export class OrganizationBuilder {
  private organization = { ...mockOrganizationFixture };

  public withId(id: string): this {
    this.organization.id = id;
    return this;
  }

  public withTenantId(tenantId: string): this {
    this.organization.tenantId = tenantId;
    return this;
  }

  public withName(name: string): this {
    this.organization.name = name;
    return this;
  }

  public withBillingTier(tier: string): this {
    this.organization.billingTier = tier;
    return this;
  }

  public build() {
    return {
      ...this.organization,
      updatedAt: TestClock.nowIso(),
    };
  }
}
