import { Injectable, Logger, Optional } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IDocumentVersion } from '../interfaces/document-version.interface.js';

@Injectable()
export class VersionRepository {
  private readonly logger = new Logger(VersionRepository.name);
  private memoryStore = new Map<string, IDocumentVersion>();

  constructor(@Optional() private readonly db?: DatabaseService) {}

  async create(data: Partial<IDocumentVersion>): Promise<IDocumentVersion> {
    const id = data.id || `ver-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const now = new Date();

    const version: IDocumentVersion = {
      id,
      documentId: data.documentId!,
      versionNumber: data.versionNumber || 1,
      size: data.size || 0,
      checksum: data.checksum || '',
      storageKey: data.storageKey!,
      storageProvider: data.storageProvider || 'LOCAL',
      comment: data.comment || null,
      createdBy: data.createdBy || 'system',
      createdAt: now,
    };

    if (this.db && (this.db as any).documentVersion) {
      try {
        await (this.db as any).documentVersion.create({
          data: {
            id: version.id,
            documentId: version.documentId,
            versionNumber: version.versionNumber,
            size: version.size,
            checksum: version.checksum,
            storageKey: version.storageKey,
            storageProvider: version.storageProvider,
            comment: version.comment,
            createdBy: version.createdBy,
          },
        });
        this.memoryStore.set(version.id, version);
        return version;
      } catch (err: any) {
        this.logger.warn(`DB insert failed for DocumentVersion, using memory fallback: ${err.message}`);
      }
    }

    this.memoryStore.set(id, version);
    return version;
  }

  async findById(id: string): Promise<IDocumentVersion | null> {
    if (this.db && (this.db as any).documentVersion) {
      try {
        const res = await (this.db as any).documentVersion.findUnique({ where: { id } });
        if (res) return res as IDocumentVersion;
      } catch (err: any) {
        this.logger.warn(`DB findById failed for DocumentVersion: ${err.message}`);
      }
    }
    return this.memoryStore.get(id) || null;
  }

  async findByDocumentId(documentId: string): Promise<IDocumentVersion[]> {
    if (this.db && (this.db as any).documentVersion) {
      try {
        const list = await (this.db as any).documentVersion.findMany({
          where: { documentId },
          orderBy: { versionNumber: 'desc' },
        });
        if (list && list.length > 0) return list as IDocumentVersion[];
      } catch (err: any) {
        this.logger.warn(`DB findByDocumentId failed for DocumentVersion: ${err.message}`);
      }
    }

    return Array.from(this.memoryStore.values())
      .filter((v) => v.documentId === documentId)
      .sort((a, b) => b.versionNumber - a.versionNumber);
  }

  async findNextVersionNumber(documentId: string): Promise<number> {
    const versions = await this.findByDocumentId(documentId);
    if (versions.length === 0) return 1;
    return Math.max(...versions.map((v) => v.versionNumber)) + 1;
  }
}
