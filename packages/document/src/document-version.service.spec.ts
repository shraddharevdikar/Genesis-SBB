import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { DocumentVersionService } from './document-version.service.js';
import { VersionRepository } from './repositories/version.repository.js';
import { DocumentRepository } from './repositories/document.repository.js';
import { ChecksumProcessor } from './processors/checksum.processor.js';

describe('DocumentVersionService', () => {
  let versionService: DocumentVersionService;
  let versionRepository: VersionRepository;
  let documentRepository: DocumentRepository;
  let checksumProcessor: ChecksumProcessor;

  beforeEach(() => {
    versionRepository = new VersionRepository();
    documentRepository = new DocumentRepository();
    checksumProcessor = new ChecksumProcessor();
    versionService = new DocumentVersionService(versionRepository, documentRepository, checksumProcessor);
  });

  it('should create version history automatically', async () => {
    const doc = await documentRepository.create({ name: 'Invoice.pdf', storageKey: 'docs/inv-1.pdf' });

    const v1 = await versionService.createVersion({
      documentId: doc.id,
      size: 500,
      checksum: 'hash123',
      storageKey: 'docs/inv-1.pdf',
      storageProvider: 'LOCAL',
      comment: 'V1 Initial',
      createdBy: 'user-1',
    });

    const v2 = await versionService.createVersion({
      documentId: doc.id,
      size: 600,
      checksum: 'hash456',
      storageKey: 'docs/inv-2.pdf',
      storageProvider: 'LOCAL',
      comment: 'V2 Updated',
      createdBy: 'user-1',
    });

    assert.strictEqual(v1.versionNumber, 1);
    assert.strictEqual(v2.versionNumber, 2);

    const history = await versionService.getVersionHistory(doc.id);
    assert.strictEqual(history.length, 2);
    assert.strictEqual(history[0].versionNumber, 2); // Descending order
  });

  it('should restore version and create a new version entry', async () => {
    const doc = await documentRepository.create({ name: 'Policy.pdf', storageKey: 'docs/pol-1.pdf' });

    const v1 = await versionService.createVersion({
      documentId: doc.id,
      size: 1000,
      checksum: 'hash-v1',
      storageKey: 'docs/pol-1.pdf',
      storageProvider: 'LOCAL',
      createdBy: 'user-1',
    });

    await versionService.createVersion({
      documentId: doc.id,
      size: 1200,
      checksum: 'hash-v2',
      storageKey: 'docs/pol-2.pdf',
      storageProvider: 'LOCAL',
      createdBy: 'user-1',
    });

    const restored = await versionService.restoreVersion(doc.id, v1.id, 'user-2');
    assert.strictEqual(restored.versionNumber, 3);
    assert.strictEqual(restored.checksum, 'hash-v1');
    assert.strictEqual(restored.storageKey, 'docs/pol-1.pdf');
  });

  it('should compare two versions accurately', async () => {
    const doc = await documentRepository.create({ name: 'Contract.pdf', storageKey: 'docs/c-1.pdf' });

    const v1 = await versionService.createVersion({
      documentId: doc.id,
      size: 1000,
      checksum: 'checksumA',
      storageKey: 'docs/c-1.pdf',
      storageProvider: 'LOCAL',
      createdBy: 'user-1',
    });

    const v2 = await versionService.createVersion({
      documentId: doc.id,
      size: 1500,
      checksum: 'checksumB',
      storageKey: 'docs/c-2.pdf',
      storageProvider: 'LOCAL',
      createdBy: 'user-1',
    });

    const diff = await versionService.compareVersions(v1.id, v2.id);
    assert.strictEqual(diff.sizeDifference, 500);
    assert.strictEqual(diff.isChecksumEqual, false);
  });
});
