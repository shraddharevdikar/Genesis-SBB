import { Injectable, Logger, Optional } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IDocument } from '../interfaces/document.interface.js';

@Injectable()
export class DocumentRepository {
  private readonly logger = new Logger(DocumentRepository.name);
  private memoryStore = new Map<string, IDocument>();

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async create(data: Partial<IDocument>): Promise<IDocument> {
    const id = data.id || `doc-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date();

    const doc: IDocument = {
      id,
      name: data.name!,
      originalName: data.originalName || data.name!,
      contentType: data.contentType || 'application/octet-stream',
      extension: data.extension || 'bin',
      size: data.size || 0,
      checksum: data.checksum || '',
      folderId: data.folderId || null,
      tenantId: data.tenantId || 'default-tenant',
      organizationId: data.organizationId || 'default-org',
      ownerId: data.ownerId || 'system',
      createdBy: data.createdBy || data.ownerId || 'system',
      modifiedBy: data.modifiedBy || data.createdBy || 'system',
      tags: data.tags || [],
      category: data.category || null,
      retentionPolicy: data.retentionPolicy || null,
      aiProcessingStatus: data.aiProcessingStatus || 'PENDING',
      storageProvider: data.storageProvider || 'LOCAL',
      storageKey: data.storageKey!,
      isFavorite: data.isFavorite || false,
      isDeleted: data.isDeleted || false,
      deletedAt: data.deletedAt || null,
      deletedBy: data.deletedBy || null,
      createdAt: data.createdAt || now,
      updatedAt: data.updatedAt || now,
      metadata: data.metadata || null,
    };

    if (this.db && (this.db as any).document) {
      try {
        const created = await (this.db as any).document.create({
          data: {
            id: doc.id,
            name: doc.name,
            originalName: doc.originalName,
            contentType: doc.contentType,
            extension: doc.extension,
            size: doc.size,
            checksum: doc.checksum,
            folderId: doc.folderId,
            tenantId: doc.tenantId,
            organizationId: doc.organizationId,
            ownerId: doc.ownerId,
            createdBy: doc.createdBy,
            modifiedBy: doc.modifiedBy,
            tags: doc.tags as any,
            category: doc.category,
            retentionPolicy: doc.retentionPolicy,
            aiProcessingStatus: doc.aiProcessingStatus,
            storageProvider: doc.storageProvider,
            storageKey: doc.storageKey,
            isFavorite: doc.isFavorite,
            isDeleted: doc.isDeleted,
            deletedAt: doc.deletedAt,
            deletedBy: doc.deletedBy,
          },
        });
        this.memoryStore.set(doc.id, doc);
        return doc;
      } catch (err: any) {
        this.logger.warn(`DB insert failed for Document, using memory store fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, doc);
    return doc;
  }

  async findById(id: string, tenantId?: string, organizationId?: string): Promise<IDocument | null> {
    if (this.db && (this.db as any).document) {
      try {
        const where: any = { id };
        if (tenantId) where.tenantId = tenantId;
        if (organizationId) where.organizationId = organizationId;

        const res = await (this.db as any).document.findFirst({ where });
        if (res) return res as IDocument;
      } catch (err: any) {
        this.logger.warn(`DB findById failed for Document, using memory fallback: ${err.message}`);
      }
    }

    const doc = this.memoryStore.get(id);
    if (!doc) return null;

    if (tenantId && doc.tenantId !== tenantId) return null;
    if (organizationId && doc.organizationId !== organizationId) return null;

    return doc;
  }

  async update(id: string, data: Partial<IDocument>): Promise<IDocument> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new Error(`Document ${id} not found`);
    }

    const updated: IDocument = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };

    if (this.db && (this.db as any).document) {
      try {
        await (this.db as any).document.update({
          where: { id },
          data: {
            name: updated.name,
            folderId: updated.folderId,
            modifiedBy: updated.modifiedBy,
            tags: updated.tags as any,
            category: updated.category,
            retentionPolicy: updated.retentionPolicy,
            aiProcessingStatus: updated.aiProcessingStatus,
            storageKey: updated.storageKey,
            storageProvider: updated.storageProvider,
            size: updated.size,
            checksum: updated.checksum,
            isFavorite: updated.isFavorite,
            isDeleted: updated.isDeleted,
            deletedAt: updated.deletedAt,
            deletedBy: updated.deletedBy,
          },
        });
      } catch (err: any) {
        this.logger.warn(`DB update failed for Document, using memory store fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, updated);
    return updated;
  }

  async softDelete(id: string, deletedBy: string): Promise<IDocument> {
    return this.update(id, {
      isDeleted: true,
      deletedAt: new Date(),
      deletedBy,
    });
  }

  async restore(id: string): Promise<IDocument> {
    return this.update(id, {
      isDeleted: false,
      deletedAt: null,
      deletedBy: null,
    });
  }

  async deletePermanent(id: string): Promise<boolean> {
    if (this.db && (this.db as any).document) {
      try {
        await (this.db as any).document.delete({ where: { id } });
      } catch (err: any) {
        this.logger.warn(`DB permanent delete failed for Document: ${err.message}`);
      }
    }
    return this.memoryStore.delete(id);
  }

  async findMany(filters: {
    tenantId?: string;
    organizationId?: string;
    ownerId?: string;
    category?: string;
    folderId?: string | null;
    tags?: string[];
    filename?: string;
    documentType?: string;
    startDate?: Date;
    endDate?: Date;
    isFavorite?: boolean;
    isDeleted?: boolean;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ items: IDocument[]; total: number }> {
    let list = Array.from(this.memoryStore.values());

    // Multi-tenant filtering
    if (filters.tenantId) list = list.filter((d) => d.tenantId === filters.tenantId);
    if (filters.organizationId) list = list.filter((d) => d.organizationId === filters.organizationId);
    
    // Soft delete status (default false unless explicitly searching recycle bin)
    const isDeletedFilter = filters.isDeleted !== undefined ? filters.isDeleted : false;
    list = list.filter((d) => d.isDeleted === isDeletedFilter);

    if (filters.ownerId) list = list.filter((d) => d.ownerId === filters.ownerId);
    if (filters.category) list = list.filter((d) => d.category === filters.category);
    if (filters.folderId !== undefined) list = list.filter((d) => d.folderId === filters.folderId);
    if (filters.isFavorite !== undefined) list = list.filter((d) => d.isFavorite === filters.isFavorite);

    if (filters.filename) {
      const q = filters.filename.toLowerCase();
      list = list.filter((d) => d.name.toLowerCase().includes(q) || d.originalName.toLowerCase().includes(q));
    }

    if (filters.documentType) {
      const dt = filters.documentType.toLowerCase();
      list = list.filter((d) => d.extension.toLowerCase() === dt || d.contentType.toLowerCase().includes(dt));
    }

    if (filters.tags && filters.tags.length > 0) {
      list = list.filter((d) => d.tags && filters.tags!.some((t) => d.tags!.includes(t)));
    }

    if (filters.startDate) {
      list = list.filter((d) => d.createdAt >= filters.startDate!);
    }
    if (filters.endDate) {
      list = list.filter((d) => d.createdAt <= filters.endDate!);
    }

    // Sorting
    const sortBy = filters.sortBy || 'createdAt';
    const sortOrder = filters.sortOrder || 'desc';

    list.sort((a: any, b: any) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (valA instanceof Date) valA = valA.getTime();
      if (valB instanceof Date) valB = valB.getTime();

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    const total = list.length;
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const offset = (page - 1) * limit;
    const items = list.slice(offset, offset + limit);

    return { items, total };
  }
}
