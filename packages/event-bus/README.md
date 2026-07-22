# @sbb/event-bus

Genesis-SBB Enterprise Event Bus package. Provides structured publish-subscribe, in-order execution based on subscriber priorities, dead letter queue (DLQ) support, automatic retry mechanisms, and historical event replay with strict multi-tenant context safety boundaries.

## Architecture

The Event Bus package consists of the following modular services:

1. **`EventBusService`**: The primary developer-facing interface wrapping publishing, scheduling, subscription management, replaying, and retrying.
2. **`EventPublisherService`**: Coordinates recording events to the immutable ledger (`EventStoreService`) and passing them to the dispatcher.
3. **`EventSubscriberService`**: Manages runtime event listeners and pattern matching subscriptions, including support for wildcards (e.g. `User.*` or `*`).
4. **`EventDispatcherService`**: Orchestrates event distribution to matching subscribers, ensuring priority sorting, execution limits, retry-with-backoff, and DLQ promotion on failure.
5. **`EventRegistryService`**: Automatically scans providers/controllers at startup for declarative `@EventHandler` decorators and hooks them into subscriptions.
6. **`EventStoreService`**: Handles the transaction logs for auditing and replayability, integrating with the prisma database layer.

## Installation & Setup

Add `@sbb/event-bus` to your NestJS application dependencies. Import `EventBusModule` globally in your root module:

```typescript
import { Module } from '@nestjs/common';
import { EventBusModule } from '@sbb/event-bus';

@Module({
  imports: [EventBusModule],
})
export class AppModule {}
```

## Usage

### 1. Declaring Events

Extend the base domain event class:

```typescript
import { BaseDomainEvent } from '@sbb/event-bus';

export class UserRegisteredEvent extends BaseDomainEvent<{ email: string }> {
  constructor(data: any) {
    super({
      ...data,
      eventName: 'User Registered',
      eventType: 'UserRegistered',
    });
  }
}
```

### 2. Publishing Events

Inject `EventBusService` and publish:

```typescript
import { Injectable } from '@nestjs/common';
import { EventBusService } from '@sbb/event-bus';
import { UserRegisteredEvent } from './user.events';

@Injectable()
export class UserService {
  constructor(private readonly eventBus: EventBusService) {}

  async registerUser(email: string, tenantId: string) {
    // ... logic ...
    
    await this.eventBus.publish(
      new UserRegisteredEvent({
        source: 'user.service',
        tenantId,
        payload: { email },
      })
    );
  }
}
```

### 3. Subscribing to Events

#### Declarative Subscription

Use `@EventHandler` decorator:

```typescript
import { Injectable } from '@nestjs/common';
import { EventHandler, IDomainEvent } from '@sbb/event-bus';

@Injectable()
export class NotificationHandler {
  @EventHandler({ eventType: 'UserRegistered', priority: 10 })
  async handleUserRegistered(event: IDomainEvent) {
    console.log(`Sending welcome email to ${event.payload.email}`);
  }
}
```

#### Programmatic Subscription

```typescript
this.eventBus.subscribe('UserRegistered', (event) => {
  // ... handle event ...
}, { priority: 20 });
```

### 4. Wildcard Pattern Support

Subscribers can listen to namespaces using wildcards:

*   `User*` will match `UserRegistered`, `UserLoggedIn`, and `UserDeleted`.
*   `*` will match all dispatched events across the system.

### 5. Multi-Tenant Boundaries

During historic event replay, the active tenant ID is passed to prevent cross-tenant queries:

```typescript
// Replay only historical events belonging to the user's active tenant
await this.eventBus.replay({ eventType: 'UserRegistered' }, activeUser.tenantId);
```
