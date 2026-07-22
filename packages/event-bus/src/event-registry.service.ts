import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { DiscoveryService, MetadataScanner, Reflector } from '@nestjs/core';
import { EventSubscriberService } from './event-subscriber.service.js';
import { EVENT_HANDLER_METADATA_KEY } from './decorators/event-handler.decorator.js';
import { IEventHandlerOptions } from './interfaces/event-handler.interface.js';

@Injectable()
export class EventRegistryService implements OnModuleInit {
  private readonly logger = new Logger(EventRegistryService.name);

  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    private readonly reflector: Reflector,
    private readonly subscriberService: EventSubscriberService
  ) {}

  onModuleInit() {
    this.logger.log('Scanning for declarative event handlers (@EventHandler)...');
    this.scanAndRegisterHandlers();
  }

  scanAndRegisterHandlers() {
    const providers = this.discoveryService.getProviders();
    const controllers = this.discoveryService.getControllers();
    const instances = [...providers, ...controllers];

    for (const wrapper of instances) {
      const { instance } = wrapper;
      if (!instance || typeof instance !== 'object') {
        continue;
      }

      const prototype = Object.getPrototypeOf(instance);
      if (!prototype) {
        continue;
      }

      // Use metadata scanner to locate all methods
      const methods = this.metadataScanner.getAllMethodNames(prototype);

      for (const methodName of methods) {
        const methodRef = instance[methodName];
        if (typeof methodRef !== 'function') {
          continue;
        }

        const metadata = this.reflector.get<IEventHandlerOptions>(
          EVENT_HANDLER_METADATA_KEY,
          methodRef
        );

        if (!metadata) {
          continue;
        }

        const eventTypes = Array.isArray(metadata.eventType)
          ? metadata.eventType
          : [metadata.eventType];

        const priority = metadata.priority ?? 100;
        const isAsync = metadata.async ?? false;
        const subscriberName = `${instance.constructor.name}.${methodName}`;

        for (const type of eventTypes) {
          this.subscriberService.subscribe(type, methodRef.bind(instance), {
            priority,
            async: isAsync,
            subscriberName,
          });
        }
      }
    }
  }
}
