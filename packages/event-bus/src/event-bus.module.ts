import { Module, Global } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { DatabaseModule } from '@sbb/database';
import { EventBusService } from './event-bus.service.js';
import { EventPublisherService } from './event-publisher.service.js';
import { EventSubscriberService } from './event-subscriber.service.js';
import { EventDispatcherService } from './event-dispatcher.service.js';
import { EventStoreService } from './event-store.service.js';
import { EventRegistryService } from './event-registry.service.js';
import { EventStoreRepository } from './repositories/event-store.repository.js';

@Global()
@Module({
  imports: [DiscoveryModule, DatabaseModule],
  providers: [
    EventStoreRepository,
    EventStoreService,
    EventSubscriberService,
    EventDispatcherService,
    EventPublisherService,
    EventRegistryService,
    EventBusService,
  ],
  exports: [
    EventSubscriberService,
    EventDispatcherService,
    EventPublisherService,
    EventRegistryService,
    EventBusService,
  ],
})
export class EventBusModule {}
