import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { DocumentService } from './document.service.js';
import { DocumentRepository } from './repositories/document.repository.js';
import { FolderRepository } from './repositories/folder.repository.js';
import { VersionRepository } from './repositories/version.repository.js';
import { DocumentStorageService } from './document-storage.service.js';
import { DocumentVersionService } from './document-version.service.js';
import { DocumentMetadataService } from './document-metadata.service.js';
import { DocumentSearchService } from './document-search.service.js';
import { FolderService } from './folder.service.js';
import { LocalStorageProvider } from './storage/local-storage.provider.js';
import { GCSStorageProvider } from './storage/gcs-storage.provider.js';
import { S3StorageProvider } from './storage/s3-storage.provider.js';
import { AzureStorageProvider } from './storage/azure-storage.provider.js';
import { ChecksumProcessor } from './processors/checksum.processor.js';
import { MetadataProcessor } from './processors/metadata.processor.js';
import { ThumbnailProcessor } from './processors/thumbnail.processor.js';

describe('DocumentService', () => {
  let documentService: DocumentService;
  let documentRepository: DocumentRepository;
  let folderRepository: FolderRepository;
  let versionRepository: VersionRepository;
  let storageService: DocumentStorageService;
  let versionService: DocumentVersionService;
  let metadataService: DocumentMetadataService;
  let searchService: DocumentSearchService;
  let folderService: FolderService;

  beforeEach(() => {
    documentRepository = new DocumentRepository();
    folderRepository = new FolderRepository();
    versionRepository = new VersionRepository();

    const localProv = new LocalStorageProvider('/tmp/doc-service-test');
    const gcsProv = new GCSStorageProvider();
    const s3Prov = new S3StorageProvider();
    const azureProv = new AzureStorageProvider();

    storageService = new DocumentStorageService(localProv, gcsProv, s3Prov, azureProv);

    const checksumProc = new ChecksumProcessor();
    const metaProc = new MetadataProcessor(checksumProc);
    const thumbProc = new ThumbnailProcessor();

    versionService = new DocumentVersionService(versionRepository, documentRepository, checksumProc);
    metadataService = new DocumentMetadataService(documentRepository, metaProc);
    searchService = new DocumentSearchService(documentRepository);
    folderService = new FolderService(folderRepository, documentRepository);

    documentService = new DocumentService(
      documentRepository,
      storageService,
      versionService,
      metadataService,
      searchService,
      folderService,
      checksumProc,
      thumbProc
    );
  });

  it('should upload, retrieve, download, update, move, copy, and soft delete document', async () => {
    // 1. Upload
    const file = {
      filename: 'Q4_Financials.pdf',
      mimetype: 'application/pdf',
      size: 1024,
      buffer: Buffer.from('PDF Content Data Stream'),
    };

    const doc = await documentService.uploadDocument(
      file,
      {
        name: 'Q4 Financials',
        category: 'FINANCIAL',
        tags: ['q4', 'finance'],
      },
      'user-100',
      'tenant-acme',
      'org-acme'
    );

    assert.ok(doc.id);
    assert.strictEqual(doc.name, 'Q4 Financials');
    assert.strictEqual(doc.tenantId, 'tenant-acme');
    assert.ok(doc.checksum);

    // 2. Retrieve
    const retrieved = await documentService.getDocumentById(doc.id, 'user-100', 'tenant-acme');
    assert.strictEqual(retrieved.id, doc.id);

    // 3. Download
    const download = await documentService.downloadDocument(doc.id, 'user-100', 'tenant-acme');
    assert.strictEqual(download.document.id, doc.id);
    const contentBuf = Buffer.isBuffer(download.content) ? download.content : Buffer.from(download.content as any);
    assert.strictEqual(contentBuf.toString(), 'PDF Content Data Stream');

    // 4. Update with new file content (Version 2)
    const newFile = {
      filename: 'Q4_Financials_v2.pdf',
      mimetype: 'application/pdf',
      size: 1500,
      buffer: Buffer.from('Updated PDF Content Data Stream V2'),
    };

    const updated = await documentService.updateDocument(
      doc.id,
      { versionComment: 'Revised figures' },
      newFile,
      'user-100',
      'tenant-acme'
    );

    assert.strictEqual(updated.size, newFile.buffer.length);
    const versions = await versionService.getVersionHistory(doc.id);
    assert.strictEqual(versions.length, 2);

    // 5. Move to folder
    const folder = await folderService.createFolder({ name: 'Finance Folder', tenantId: 'tenant-acme' });
    const moved = await documentService.moveDocument(doc.id, folder.id, 'user-100', 'tenant-acme');
    assert.strictEqual(moved.folderId, folder.id);

    // 6. Copy document
    const copied = await documentService.copyDocument(doc.id, folder.id, 'Q4 Financials Copy', 'user-100', 'tenant-acme');
    assert.ok(copied.id);
    assert.notStrictEqual(copied.id, doc.id);
    assert.strictEqual(copied.name, 'Q4 Financials Copy');

    // 7. Soft Delete and Recycle Bin
    await documentService.deleteDocument(doc.id, 'user-100', 'tenant-acme');
    const recycleBin = await documentService.getRecycleBin('user-100', 'tenant-acme');
    assert.strictEqual(recycleBin.length, 1);
    assert.strictEqual(recycleBin[0].id, doc.id);

    // 8. Restore
    const restored = await documentService.restoreDocument(doc.id, 'user-100', 'tenant-acme');
    assert.strictEqual(restored.isDeleted, false);
  });

  it('should integrate workflow helper methods', async () => {
    const file = {
      filename: 'Contract.pdf',
      mimetype: 'application/pdf',
      size: 500,
      buffer: Buffer.from('Contract terms'),
    };

    const doc = await documentService.uploadDocument(file, { name: 'Contract' });
    const attached = await documentService.attachToWorkflow(doc.id, 'wf-100', 'step-1');
    assert.strictEqual(attached.metadata?.customProperties?.workflowId, 'wf-100');

    const archived = await documentService.archiveWorkflowDocument(doc.id);
    assert.strictEqual(archived.category, 'ARCHIVED');
  });
});
