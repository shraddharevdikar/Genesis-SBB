# Genesis-SBB Enterprise RBAC Package (`@sbb/rbac`)

The production-ready, highly secure, and optimized Role-Based Access Control (RBAC) foundation module for Genesis-SBB.

## Features

- **Role & Permission CRUD**: Full operational services for dynamic custom Roles and Permission mapping.
- **Hierarchical Role Support**: Complete inheritance resolution where higher roles automatically inherit permissions of lower roles:
  `Platform Admin` → `Tenant Admin` → `Organization Admin` → `Department Manager` → `Employee`.
- **Cached Resolutions**: Optimized, O(1) in-memory permission engine with automatic invalidation upon updates to roles, permission assignments, or user role mapping.
- **Multi-Tenant Boundaries**: Hard isolation verification guarding database operations against cross-tenant or cross-organization data leakage.
- **Resource-Level Policies**: Declarative verification helpers for specific object permissions:
  - Can User edit this Project?
  - Can User approve this Invoice?
  - Can AI execute this Workflow?
- **Audit Trails**: Security tracking recording key changes (creation, modification, assignment) and blocked unauthorized requests directly into the PostgreSQL audit log database.

## Architecture

This package is a core foundational module of the NestJS BusinessOS runtime platform. It interfaces with:
1. `@sbb/database`: High-performance database client querying the central PostgreSQL database.
2. `@sbb/auth`: Security boundaries verifying authenticated JWT-based request context.

## Usage

### Guards & Decorators

Secure NestJS route handlers by applying decorators and guards:

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@sbb/auth';
import { RolesGuard, PermissionsGuard, Roles, Permissions } from '@sbb/rbac';

@Controller('marketing')
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class MarketingController {
  @Get('campaigns')
  @Permissions('marketing:read')
  getCampaigns() {
    return { campaigns: [] };
  }

  @Get('admin-panel')
  @Roles('Organization Admin', 'Platform Admin')
  getAdminPanel() {
    return { status: 'authorized' };
  }
}
```
