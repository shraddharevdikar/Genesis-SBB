import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { DocumentMetadataService } from './document-metadata.service.js';
import { DocumentRepository } from './repositories/document.repository.js';
import { MetadataProcessor } from './processors/metadata.processor.js';
import { ChecksumProcessor } from './processors/checksum.processor.js';

describe('DocumentMetadataService', () => {
  let metadataService: DocumentMetadataService;
  let documentRepository: DocumentRepository;
  let metadataProcessor: MetadataProcessor;
  let checksumProcessor: ChecksumProcessor;

  beforeEach(() => {
    checksumProcessor = new ChecksumProcessor();
    metadataProcessor = new MetadataProcessor(checksumProcessor);
    documentRepository = new DocumentRepository();
    metadataService = new DocumentMetadataService(documentRepository, metadataProcessor);
  });

  it('should extract basic metadata including extension and word count for text file', () => {
    const textBuffer = Buffer.from('Genesis Enterprise Document Service test content');
    const meta = metadataService.extractMetadata({
      filename: 'notes.txt',
      size: textBuffer.length,
      buffer: textBuffer,
      category: 'GENERAL',
      tags: ['notes', 'test'],
    });

    assert.strictEqual(meta.extension, 'txt');
    assert.strictEqual(meta.contentType, 'text/plain');
    assert.strictEqual(meta.wordCount, 6);
    assert.ok(meta.checksum);
  });

  it('should update document metadata and AI processing status', async () => {
    const doc = await documentRepository.create({
      name: 'Unprocessed.pdf',
      storageKey: 'docs/unprocessed.pdf',
    });

    const updated = await metadataService.updateMetadata(
      doc.id,
      {
        tags: ['legal', 'confidential'],
        category: 'LEGAL',
        retentionPolicy: 'SEVEN_YEARS',
      },
      'user-1'
    );

    assert.deepStrictEqual(updated.tags, ['legal', 'confidential']);
    assert.strictEqual(updated.category, 'LEGAL');
    assert.strictEqual(updated.retentionPolicy, 'SEVEN_YEARS');

    const aiStatusDoc = await metadataService.updateAIProcessingStatus(doc.id, 'COMPLETED');
    assert.strictEqual(aiStatusDoc.aiProcessingStatus, 'COMPLETED');
  });
});
