import { SetMetadata } from '@nestjs/common';
import { IEventHandlerOptions } from '../interfaces/event-handler.interface.js';

export const EVENT_HANDLER_METADATA_KEY = 'event_handler_metadata';

/**
 * Decorator to register NestJS service methods as event handlers.
 */
export const EventHandler = (options: IEventHandlerOptions) => {
  return SetMetadata(EVENT_HANDLER_METADATA_KEY, options);
};
export const OnEvent = EventHandler; // Provide alias for convenience
