import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller.js';
import { DocumentService } from './document.service.js';
import { DocumentStorageService } from './document-storage.service.js';
import { DocumentVersionService } from './document-version.service.js';
import { DocumentMetadataService } from './document-metadata.service.js';
import { DocumentSearchService } from './document-search.service.js';
import { FolderService } from './folder.service.js';

import { DocumentRepository } from './repositories/document.repository.js';
import { FolderRepository } from './repositories/folder.repository.js';
import { VersionRepository } from './repositories/version.repository.js';

import { LocalStorageProvider } from './storage/local-storage.provider.js';
import { GCSStorageProvider } from './storage/gcs-storage.provider.js';
import { S3StorageProvider } from './storage/s3-storage.provider.js';
import { AzureStorageProvider } from './storage/azure-storage.provider.js';

import { ChecksumProcessor } from './processors/checksum.processor.js';
import { MetadataProcessor } from './processors/metadata.processor.js';
import { ThumbnailProcessor } from './processors/thumbnail.processor.js';

@Module({
  controllers: [DocumentController],
  providers: [
    DocumentService,
    DocumentStorageService,
    DocumentVersionService,
    DocumentMetadataService,
    DocumentSearchService,
    FolderService,
    DocumentRepository,
    FolderRepository,
    VersionRepository,
    LocalStorageProvider,
    GCSStorageProvider,
    S3StorageProvider,
    AzureStorageProvider,
    ChecksumProcessor,
    MetadataProcessor,
    ThumbnailProcessor,
  ],
  exports: [
    DocumentService,
    DocumentStorageService,
    DocumentVersionService,
    DocumentMetadataService,
    DocumentSearchService,
    FolderService,
    DocumentRepository,
    FolderRepository,
    VersionRepository,
  ],
})
export class DocumentModule {}
