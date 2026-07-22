# Genesis-SBB Enterprise Audit & Activity Logging Package (`@sbb/audit`)

The production-grade, ultra-secure, and highly performant Enterprise Audit and Activity Logging module for Genesis-SBB.

## Features

- **Immutable Records**: Standard service/repository level protection strictly preventing updates or deletions of logs.
- **Advanced Activity Timeline**: Human-friendly timelines capturing User, Organization, Tenant, AI, and Workflow activities.
- **Multidimensional Search**: Built-in paging, sorting, date-range filtering, keyword lookup, and resource matching.
- **Multi-Tenant Boundary Safety**: Automatic tenant validation guards strictly blocking any cross-tenant data leakages.
- **Audit Interceptor**: Automated request interceptor collecting context IP, user agents, executions, statuses, and payload states.
- **Audit Decorator**: Clean, declarative `@Audit()` decorator to override endpoint resource mapping.
- **Audit Event Emitter**: Core observer/emitter notifying listeners of new logs, security alarms, or authorization violations.
- **Retention & Compliance**: Automated cutoff-date pruning of compliance-expired logs with transaction safeguards and logging.

---

## Architecture

This module sits natively as a core service within NestJS, acting as a middleware/interceptor layer:

```
[ HTTP REQUEST ] ──► [ JwtAuthGuard ] ──► [ Roles/Permissions Guard ] 
                                                   │
[ HTTP RESPONSE ] ◄── [ AuditInterceptor ] ◄───────┴── [ Controller / Handler ]
                             │
                             ▼
                     [ AuditService ] ──► [ Database (PostgreSQL / Prisma) ]
                             │
                             ▼
                     [ AuditEventEmitter ] ──► [ Custom Listeners / Slack / Ops Alerts ]
```

---

## API Summary

All controllers are secured under `@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)` and require authenticated JWT context.

- **`GET /audit`**: High-fidelity search query on audit logs using standard query parameters, locked strictly to active tenant.
- **`GET /audit/activity`**: Human-friendly activity feed of recent business milestones within tenant boundary.
- **`GET /audit/:id`**: Retrieve precise details of a log by ID (cross-tenant protected).
- **`POST /audit/search`**: Advanced search filtering and pagination using a JSON payload.

---

## Decorator Usage

Securely tag controller handlers to capture exact actions and resource categories:

```typescript
import { Controller, Put, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from '@sbb/auth';
import { Audit, AuditInterceptor } from '@sbb/audit';

@Controller('campaigns')
@UseGuards(JwtAuthGuard)
@UseInterceptors(AuditInterceptor)
export class CampaignController {
  @Put(':id')
  @Audit({ action: 'UPDATE', resource: 'Campaign', severity: 'INFO' })
  async updateCampaign(@Body() updateDto: any) {
    return { success: true };
  }
}
```

---

## Retention Policy

Supports compliance schedules (e.g., GPDR / SOC2 90-day retention policies) by offering programmatical pruning. Prior to clearing records, it inserts a secure `SystemRetention` audit log indicating exactly how many items were pruned.

```typescript
await auditService.purgeOldLogs(90, 'COMPLIANCE_CRON');
```
