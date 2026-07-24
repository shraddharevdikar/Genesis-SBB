import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { VersionRepository } from './repositories/version.repository.js';
import { DocumentRepository } from './repositories/document.repository.js';
import { IDocumentVersion } from './interfaces/document-version.interface.js';
import { ChecksumProcessor } from './processors/checksum.processor.js';

@Injectable()
export class DocumentVersionService {
  private readonly logger = new Logger(DocumentVersionService.name);

  constructor(
    private readonly versionRepository: VersionRepository,
    private readonly documentRepository: DocumentRepository,
    private readonly checksumProcessor: ChecksumProcessor,
  ) {}

  async createVersion(params: {
    documentId: string;
    size: number;
    checksum: string;
    storageKey: string;
    storageProvider: string;
    comment?: string;
    createdBy: string;
  }): Promise<IDocumentVersion> {
    const nextVersionNum = await this.versionRepository.findNextVersionNumber(params.documentId);

    const version = await this.versionRepository.create({
      documentId: params.documentId,
      versionNumber: nextVersionNum,
      size: params.size,
      checksum: params.checksum,
      storageKey: params.storageKey,
      storageProvider: params.storageProvider,
      comment: params.comment || null,
      createdBy: params.createdBy,
    });

    this.logger.log(`Created version ${version.versionNumber} for document ${params.documentId}`);
    return version;
  }

  async getVersionHistory(documentId: string): Promise<IDocumentVersion[]> {
    return this.versionRepository.findByDocumentId(documentId);
  }

  async getLatestVersion(documentId: string): Promise<IDocumentVersion | null> {
    const versions = await this.getVersionHistory(documentId);
    return versions.length > 0 ? versions[0] : null;
  }

  async getVersion(versionId: string): Promise<IDocumentVersion> {
    const version = await this.versionRepository.findById(versionId);
    if (!version) {
      throw new NotFoundException(`Document version ${versionId} not found`);
    }
    return version;
  }

  async restoreVersion(documentId: string, versionId: string, restoredBy: string): Promise<IDocumentVersion> {
    const versionToRestore = await this.getVersion(versionId);
    if (versionToRestore.documentId !== documentId) {
      throw new NotFoundException(`Version ${versionId} does not belong to document ${documentId}`);
    }

    const doc = await this.documentRepository.findById(documentId);
    if (!doc) {
      throw new NotFoundException(`Document ${documentId} not found`);
    }

    // Create a new version promoting the historical version content
    const newVersion = await this.createVersion({
      documentId,
      size: versionToRestore.size,
      checksum: versionToRestore.checksum,
      storageKey: versionToRestore.storageKey,
      storageProvider: versionToRestore.storageProvider,
      comment: `Restored from version ${versionToRestore.versionNumber}`,
      createdBy: restoredBy,
    });

    // Update main document record
    await this.documentRepository.update(documentId, {
      size: versionToRestore.size,
      checksum: versionToRestore.checksum,
      storageKey: versionToRestore.storageKey,
      storageProvider: versionToRestore.storageProvider,
      modifiedBy: restoredBy,
    });

    this.logger.log(`Restored version ${versionToRestore.versionNumber} as new version ${newVersion.versionNumber} for document ${documentId}`);
    return newVersion;
  }

  async compareVersions(v1Id: string, v2Id: string): Promise<{
    version1: IDocumentVersion;
    version2: IDocumentVersion;
    sizeDifference: number;
    isChecksumEqual: boolean;
  }> {
    const v1 = await this.getVersion(v1Id);
    const v2 = await this.getVersion(v2Id);

    const isChecksumEqual = this.checksumProcessor.verifyChecksum(v1.checksum, v2.checksum);
    const sizeDifference = v2.size - v1.size;

    return {
      version1: v1,
      version2: v2,
      sizeDifference,
      isChecksumEqual,
    };
  }
}
