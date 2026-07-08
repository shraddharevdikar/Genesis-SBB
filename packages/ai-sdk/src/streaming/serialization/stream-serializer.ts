import { StreamEvent } from '../streams/stream-event.js';

export interface StreamSerializer {
  serialize(event: StreamEvent): string | Uint8Array;
  deserialize(data: string | Uint8Array): StreamEvent;
}

export class DefaultStreamSerializer implements StreamSerializer {
  public serialize(event: StreamEvent): string {
    return JSON.stringify(event);
  }

  public deserialize(data: string | Uint8Array): StreamEvent {
    const rawString = typeof data === 'string' ? data : new TextDecoder().decode(data);
    const parsed = JSON.parse(rawString);
    return {
      ...parsed,
      timestamp: new Date(parsed.timestamp),
      message: parsed.message ? {
        ...parsed.message,
        timestamp: new Date(parsed.message.timestamp),
      } : undefined,
    };
  }
}
