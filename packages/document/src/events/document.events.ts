import { BaseDomainEvent } from '@sbb/event-bus';

export interface DocumentEventPayload {
  documentId: string;
  name: string;
  originalName?: string;
  folderId?: string | null;
  size?: number;
  checksum?: string;
  versionNumber?: number;
  storageProvider?: string;
  storageKey?: string;
  ownerId?: string;
  actionBy?: string;
  previousFolderId?: string | null;
  metadata?: Record<string, any> | null;
}

export interface FolderEventPayload {
  folderId: string;
  name: string;
  parentId?: string | null;
  ownerId?: string;
  actionBy?: string;
}

export class DocumentUploadedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Uploaded',
      eventType: 'document.uploaded',
    });
  }
}

export class DocumentUpdatedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Updated',
      eventType: 'document.updated',
    });
  }
}

export class DocumentDeletedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Deleted',
      eventType: 'document.deleted',
    });
  }
}

export class DocumentMovedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Moved',
      eventType: 'document.moved',
    });
  }
}

export class DocumentVersionCreatedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Version Created',
      eventType: 'document.version_created',
    });
  }
}

export class DocumentRestoredEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Restored',
      eventType: 'document.restored',
    });
  }
}

export class DocumentDownloadedEvent extends BaseDomainEvent<DocumentEventPayload> {
  constructor(data: Omit<BaseDomainEvent<DocumentEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Document Downloaded',
      eventType: 'document.downloaded',
    });
  }
}

export class FolderCreatedEvent extends BaseDomainEvent<FolderEventPayload> {
  constructor(data: Omit<BaseDomainEvent<FolderEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Folder Created',
      eventType: 'folder.created',
    });
  }
}

export class FolderUpdatedEvent extends BaseDomainEvent<FolderEventPayload> {
  constructor(data: Omit<BaseDomainEvent<FolderEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Folder Updated',
      eventType: 'folder.updated',
    });
  }
}

export class FolderDeletedEvent extends BaseDomainEvent<FolderEventPayload> {
  constructor(data: Omit<BaseDomainEvent<FolderEventPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName' | 'source'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
    source?: string;
  }) {
    super({
      ...data,
      source: data.source || 'document-service',
      eventName: 'Folder Deleted',
      eventType: 'folder.deleted',
    });
  }
}
