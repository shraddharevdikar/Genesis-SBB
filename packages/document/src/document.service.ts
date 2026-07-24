import { Injectable, Logger, NotFoundException, ForbiddenException, Optional } from '@nestjs/common';
import { DocumentRepository } from './repositories/document.repository.js';
import { DocumentStorageService } from './document-storage.service.js';
import { DocumentVersionService } from './document-version.service.js';
import { DocumentMetadataService } from './document-metadata.service.js';
import { DocumentSearchService } from './document-search.service.js';
import { FolderService } from './folder.service.js';
import { IDocument } from './interfaces/document.interface.js';
import { IDocumentVersion } from './interfaces/document-version.interface.js';
import { StorageFile } from './interfaces/storage-provider.interface.js';
import { UploadDocumentDto } from './dto/upload-document.dto.js';
import { UpdateDocumentDto } from './dto/update-document.dto.js';
import { SearchDocumentDto } from './dto/search-document.dto.js';
import { ChecksumProcessor } from './processors/checksum.processor.js';
import { ThumbnailProcessor } from './processors/thumbnail.processor.js';
import { AuditService } from '@sbb/audit';
import { EventBusService } from '@sbb/event-bus';
import { RbacService } from '@sbb/rbac';
import {
  DocumentUploadedEvent,
  DocumentUpdatedEvent,
  DocumentDeletedEvent,
  DocumentMovedEvent,
  DocumentVersionCreatedEvent,
  DocumentRestoredEvent,
  DocumentDownloadedEvent,
} from './events/document.events.js';
import { DOCUMENT_PERMISSIONS } from './constants/document.constants.js';
import { Readable } from 'node:stream';

@Injectable()
export class DocumentService {
  private readonly logger = new Logger(DocumentService.name);

  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly storageService: DocumentStorageService,
    private readonly versionService: DocumentVersionService,
    private readonly metadataService: DocumentMetadataService,
    private readonly searchService: DocumentSearchService,
    private readonly folderService: FolderService,
    private readonly checksumProcessor: ChecksumProcessor,
    private readonly thumbnailProcessor: ThumbnailProcessor,
    @Optional() private readonly auditService?: AuditService,
    @Optional() private readonly eventBus?: EventBusService,
    @Optional() private readonly rbacService?: RbacService,
  ) {}

  async uploadDocument(
    file: StorageFile,
    dto: UploadDocumentDto,
    userId: string = 'system',
    tenantId?: string,
    organizationId?: string
  ): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.CREATE, tenantId);

    const activeTenant = dto.tenantId || tenantId || 'default-tenant';
    const activeOrg = dto.organizationId || organizationId || 'default-org';
    const activeOwner = dto.ownerId || userId;

    if (dto.folderId) {
      await this.folderService.getFolderById(dto.folderId, activeTenant);
    }

    // Process metadata and checksum
    const meta = this.metadataService.extractMetadata({
      filename: dto.name || file.filename,
      originalFilename: file.filename,
      contentType: file.mimetype,
      size: file.size,
      buffer: file.buffer,
      owner: activeOwner,
      createdBy: userId,
      category: dto.category,
      retentionPolicy: dto.retentionPolicy,
      tags: dto.tags,
    });

    // Store in storage provider
    const storedObject = await this.storageService.upload(
      file,
      dto.storageProvider,
      `tenants/${activeTenant}/docs`
    );

    // Create document database record
    const doc = await this.documentRepository.create({
      name: dto.name || file.filename,
      originalName: file.filename,
      contentType: file.mimetype,
      extension: meta.extension,
      size: storedObject.size,
      checksum: storedObject.checksum,
      folderId: dto.folderId || null,
      tenantId: activeTenant,
      organizationId: activeOrg,
      ownerId: activeOwner,
      createdBy: userId,
      modifiedBy: userId,
      tags: dto.tags || [],
      category: dto.category || null,
      retentionPolicy: dto.retentionPolicy || null,
      aiProcessingStatus: 'PENDING',
      storageProvider: storedObject.storageProvider,
      storageKey: storedObject.storageKey,
      metadata: meta,
    });

    // Create initial Version 1 record
    await this.versionService.createVersion({
      documentId: doc.id,
      size: doc.size,
      checksum: doc.checksum,
      storageKey: doc.storageKey,
      storageProvider: doc.storageProvider,
      comment: 'Initial upload',
      createdBy: userId,
    });

    // Audit Log
    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'UPLOAD',
        entity: 'Document',
        entityId: doc.id,
        userId,
        tenantId: activeTenant,
        payload: { filename: doc.name, size: doc.size, checksum: doc.checksum },
      });
    }

    // Event Bus
    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentUploadedEvent({
          tenantId: activeTenant,
          payload: {
            documentId: doc.id,
            name: doc.name,
            originalName: doc.originalName,
            folderId: doc.folderId,
            size: doc.size,
            checksum: doc.checksum,
            versionNumber: 1,
            storageProvider: doc.storageProvider,
            storageKey: doc.storageKey,
            ownerId: doc.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return doc;
  }

  async getDocumentById(id: string, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.READ, tenantId);

    const doc = await this.documentRepository.findById(id, tenantId);
    if (!doc) {
      throw new NotFoundException(`Document ${id} not found`);
    }
    return doc;
  }

  async downloadDocument(id: string, userId: string = 'system', tenantId?: string): Promise<{
    document: IDocument;
    content: Readable | Buffer;
  }> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.DOWNLOAD, tenantId);

    const doc = await this.getDocumentById(id, userId, tenantId);
    const content = await this.storageService.download(doc.storageKey, doc.storageProvider);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'DOWNLOAD',
        entity: 'Document',
        entityId: doc.id,
        userId,
        tenantId: doc.tenantId,
        payload: { filename: doc.name, size: doc.size },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentDownloadedEvent({
          tenantId: doc.tenantId,
          payload: {
            documentId: doc.id,
            name: doc.name,
            size: doc.size,
            checksum: doc.checksum,
            storageProvider: doc.storageProvider,
            storageKey: doc.storageKey,
            ownerId: doc.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return { document: doc, content };
  }

  async updateDocument(
    id: string,
    dto: UpdateDocumentDto,
    newFile?: StorageFile,
    userId: string = 'system',
    tenantId?: string
  ): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.UPDATE, tenantId);

    const doc = await this.getDocumentById(id, userId, tenantId);

    let storageKey = doc.storageKey;
    let storageProvider = doc.storageProvider;
    let size = doc.size;
    let checksum = doc.checksum;
    let newVersionCreated = false;
    let versionNumber = 1;

    if (newFile) {
      const storedObject = await this.storageService.upload(
        newFile,
        storageProvider,
        `tenants/${doc.tenantId}/docs`
      );

      storageKey = storedObject.storageKey;
      storageProvider = storedObject.storageProvider;
      size = storedObject.size;
      checksum = storedObject.checksum;

      const newVersion = await this.versionService.createVersion({
        documentId: id,
        size,
        checksum,
        storageKey,
        storageProvider,
        comment: dto.versionComment || 'Document re-uploaded with new version',
        createdBy: userId,
      });

      newVersionCreated = true;
      versionNumber = newVersion.versionNumber;
    }

    const updated = await this.documentRepository.update(id, {
      name: dto.name || doc.name,
      folderId: dto.folderId !== undefined ? dto.folderId : doc.folderId,
      tags: dto.tags || doc.tags,
      category: dto.category || doc.category,
      retentionPolicy: dto.retentionPolicy || doc.retentionPolicy,
      isFavorite: dto.isFavorite !== undefined ? dto.isFavorite : doc.isFavorite,
      modifiedBy: userId,
      storageKey,
      storageProvider,
      size,
      checksum,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'UPDATE',
        entity: 'Document',
        entityId: id,
        userId,
        tenantId: doc.tenantId,
        payload: { newFileUploaded: !!newFile, newVersionCreated, versionNumber },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentUpdatedEvent({
          tenantId: doc.tenantId,
          payload: {
            documentId: id,
            name: updated.name,
            folderId: updated.folderId,
            size: updated.size,
            checksum: updated.checksum,
            versionNumber,
            storageProvider: updated.storageProvider,
            storageKey: updated.storageKey,
            ownerId: updated.ownerId,
            actionBy: userId,
          },
        })
      );

      if (newVersionCreated) {
        await this.eventBus.publish(
          new DocumentVersionCreatedEvent({
            tenantId: doc.tenantId,
            payload: {
              documentId: id,
              name: updated.name,
              size: updated.size,
              checksum: updated.checksum,
              versionNumber,
              storageProvider: updated.storageProvider,
              storageKey: updated.storageKey,
              actionBy: userId,
            },
          })
        );
      }
    }

    return updated;
  }

  async deleteDocument(id: string, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.DELETE, tenantId);

    const doc = await this.getDocumentById(id, userId, tenantId);
    const deleted = await this.documentRepository.softDelete(id, userId);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'DELETE',
        entity: 'Document',
        entityId: id,
        userId,
        tenantId: doc.tenantId,
        payload: { softDelete: true },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentDeletedEvent({
          tenantId: doc.tenantId,
          payload: {
            documentId: id,
            name: doc.name,
            ownerId: doc.ownerId,
            actionBy: userId,
          },
        })
      );
    }

    return deleted;
  }

  async moveDocument(id: string, targetFolderId: string | null, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.UPDATE, tenantId);

    const doc = await this.getDocumentById(id, userId, tenantId);
    if (targetFolderId) {
      await this.folderService.getFolderById(targetFolderId, doc.tenantId);
    }

    const previousFolderId = doc.folderId;
    const moved = await this.documentRepository.update(id, {
      folderId: targetFolderId,
      modifiedBy: userId,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'MOVE',
        entity: 'Document',
        entityId: id,
        userId,
        tenantId: doc.tenantId,
        payload: { previousFolderId, targetFolderId },
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentMovedEvent({
          tenantId: doc.tenantId,
          payload: {
            documentId: id,
            name: doc.name,
            folderId: targetFolderId,
            previousFolderId,
            actionBy: userId,
          },
        })
      );
    }

    return moved;
  }

  async copyDocument(id: string, targetFolderId?: string | null, newName?: string, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.CREATE, tenantId);

    const sourceDoc = await this.getDocumentById(id, userId, tenantId);
    const content = await this.storageService.download(sourceDoc.storageKey, sourceDoc.storageProvider);

    let buffer: Buffer;
    if (Buffer.isBuffer(content)) {
      buffer = content;
    } else {
      const chunks: Buffer[] = [];
      for await (const chunk of content) {
        chunks.push(Buffer.from(chunk));
      }
      buffer = Buffer.concat(chunks);
    }

    const fileToUpload: StorageFile = {
      filename: newName || `Copy of ${sourceDoc.originalName}`,
      mimetype: sourceDoc.contentType,
      size: buffer.length,
      buffer,
    };

    const copiedDoc = await this.uploadDocument(
      fileToUpload,
      {
        name: newName || `Copy of ${sourceDoc.name}`,
        folderId: targetFolderId !== undefined ? (targetFolderId || undefined) : (sourceDoc.folderId || undefined),
        category: sourceDoc.category || undefined,
        tags: sourceDoc.tags,
        retentionPolicy: sourceDoc.retentionPolicy || undefined,
        storageProvider: sourceDoc.storageProvider,
        tenantId: sourceDoc.tenantId,
        organizationId: sourceDoc.organizationId,
      },
      userId,
      tenantId
    );

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'COPY',
        entity: 'Document',
        entityId: copiedDoc.id,
        userId,
        tenantId: sourceDoc.tenantId,
        payload: { sourceDocumentId: id },
      });
    }

    return copiedDoc;
  }

  async restoreDocument(id: string, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.UPDATE, tenantId);

    const doc = await this.documentRepository.findById(id, tenantId);
    if (!doc) {
      throw new NotFoundException(`Document ${id} not found`);
    }

    const restored = await this.documentRepository.restore(id);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'RESTORE',
        entity: 'Document',
        entityId: id,
        userId,
        tenantId: doc.tenantId,
      });
    }

    if (this.eventBus) {
      await this.eventBus.publish(
        new DocumentRestoredEvent({
          tenantId: doc.tenantId,
          payload: {
            documentId: id,
            name: doc.name,
            actionBy: userId,
          },
        })
      );
    }

    return restored;
  }

  async getRecycleBin(userId: string = 'system', tenantId?: string, organizationId?: string): Promise<IDocument[]> {
    const res = await this.documentRepository.findMany({
      tenantId,
      organizationId,
      isDeleted: true,
      limit: 100,
    });
    return res.items;
  }

  async deletePermanent(id: string, userId: string = 'system', tenantId?: string): Promise<boolean> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.DELETE, tenantId);

    const doc = await this.documentRepository.findById(id, tenantId);
    if (!doc) return false;

    // Delete from storage provider
    await this.storageService.delete(doc.storageKey, doc.storageProvider);

    // Delete from database
    const success = await this.documentRepository.deletePermanent(id);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'PERMANENT_DELETE',
        entity: 'Document',
        entityId: id,
        userId,
        tenantId: doc.tenantId,
      });
    }

    return success;
  }

  async restoreVersion(documentId: string, versionId: string, userId: string = 'system', tenantId?: string): Promise<IDocumentVersion> {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.UPDATE, tenantId);

    const restoredVersion = await this.versionService.restoreVersion(documentId, versionId, userId);

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'VERSION_RESTORE',
        entity: 'Document',
        entityId: documentId,
        userId,
        tenantId,
        payload: { versionId, restoredVersionNumber: restoredVersion.versionNumber },
      });
    }

    return restoredVersion;
  }

  async toggleFavorite(id: string, isFavorite: boolean, userId: string = 'system', tenantId?: string): Promise<IDocument> {
    const doc = await this.getDocumentById(id, userId, tenantId);
    return this.documentRepository.update(id, { isFavorite });
  }

  async searchDocuments(dto: SearchDocumentDto, userId: string = 'system', tenantId?: string, organizationId?: string) {
    await this.checkPermission(userId, DOCUMENT_PERMISSIONS.READ, tenantId);
    return this.searchService.search(dto, tenantId, organizationId);
  }

  // Workflow integration helpers
  async attachToWorkflow(documentId: string, workflowId: string, stepId?: string): Promise<IDocument> {
    const doc = await this.getDocumentById(documentId);
    return this.metadataService.updateMetadata(documentId, {
      customProperties: { workflowId, stepId, attachedAt: new Date().toISOString() },
    });
  }

  async readWorkflowDocument(documentId: string): Promise<{ document: IDocument; content: Readable | Buffer }> {
    return this.downloadDocument(documentId);
  }

  async archiveWorkflowDocument(documentId: string, userId: string = 'system'): Promise<IDocument> {
    return this.metadataService.updateMetadata(documentId, {
      retentionPolicy: 'PERMANENT',
      category: 'ARCHIVED',
    });
  }

  private async checkPermission(userId: string, permission: string, tenantId?: string): Promise<void> {
    if (this.rbacService) {
      try {
        const userPermissions = await this.rbacService.getUserPermissions(userId);
        if (!userPermissions.includes(permission) && !userPermissions.includes('*')) {
          this.logger.warn(`User ${userId} denied permission ${permission} for tenant ${tenantId}`);
        }
      } catch (err: any) {
        this.logger.debug(`RBAC check skipped or user not found: ${err.message}`);
      }
    }
  }
}
