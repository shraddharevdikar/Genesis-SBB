import { Injectable, Logger, NotFoundException, Optional } from '@nestjs/common';
import { DocumentRepository } from './repositories/document.repository.js';
import { MetadataProcessor } from './processors/metadata.processor.js';
import { IDocumentMetadata } from './interfaces/metadata.interface.js';
import { IDocument } from './interfaces/document.interface.js';
import { AI_PROCESSING_STATUS, AIProcessingStatus } from './constants/document.constants.js';
import { AuditService } from '@sbb/audit';

@Injectable()
export class DocumentMetadataService {
  private readonly logger = new Logger(DocumentMetadataService.name);

  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly metadataProcessor: MetadataProcessor,
    @Optional() private readonly auditService?: AuditService,
  ) {}

  extractMetadata(file: {
    filename: string;
    originalFilename?: string;
    contentType?: string;
    size: number;
    buffer?: Buffer;
    owner?: string;
    createdBy?: string;
    category?: string;
    retentionPolicy?: string;
    tags?: string[];
  }): IDocumentMetadata {
    return this.metadataProcessor.extractBasicMetadata(file);
  }

  async updateMetadata(
    documentId: string,
    updates: {
      tags?: string[];
      category?: string;
      retentionPolicy?: string;
      customProperties?: Record<string, any>;
      modifiedBy?: string;
    },
    userId: string = 'system',
    tenantId?: string
  ): Promise<IDocument> {
    const doc = await this.documentRepository.findById(documentId, tenantId);
    if (!doc) {
      throw new NotFoundException(`Document ${documentId} not found`);
    }

    const updatedTags = updates.tags !== undefined ? updates.tags : doc.tags;
    const updatedCategory = updates.category !== undefined ? updates.category : doc.category;
    const updatedPolicy = updates.retentionPolicy !== undefined ? updates.retentionPolicy : doc.retentionPolicy;

    const existingMetadata = doc.metadata || {
      filename: doc.name,
      originalFilename: doc.originalName,
      contentType: doc.contentType,
      extension: doc.extension,
      size: doc.size,
      checksum: doc.checksum,
      owner: doc.ownerId,
      createdBy: doc.createdBy,
      modifiedBy: userId,
    };

    const newMetadata: IDocumentMetadata = {
      ...existingMetadata,
      tags: updatedTags,
      category: updatedCategory,
      retentionPolicy: updatedPolicy,
      modifiedBy: userId,
      customProperties: {
        ...(existingMetadata.customProperties || {}),
        ...(updates.customProperties || {}),
      },
    };

    const updatedDoc = await this.documentRepository.update(documentId, {
      tags: updatedTags,
      category: updatedCategory,
      retentionPolicy: updatedPolicy,
      modifiedBy: userId,
      metadata: newMetadata,
    });

    if (this.auditService) {
      await this.auditService.createAuditLog({
        actorId: userId,
        action: 'METADATA_UPDATE',
        entity: 'Document',
        entityId: documentId,
        userId,
        tenantId: doc.tenantId,
        payload: { updates },
      });
    }

    this.logger.log(`Updated metadata for document ${documentId}`);
    return updatedDoc;
  }

  async updateAIProcessingStatus(
    documentId: string,
    status: AIProcessingStatus,
    tenantId?: string
  ): Promise<IDocument> {
    const doc = await this.documentRepository.findById(documentId, tenantId);
    if (!doc) {
      throw new NotFoundException(`Document ${documentId} not found`);
    }

    return this.documentRepository.update(documentId, {
      aiProcessingStatus: status,
    });
  }
}
