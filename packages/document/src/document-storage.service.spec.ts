import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { DocumentStorageService } from './document-storage.service.js';
import { LocalStorageProvider } from './storage/local-storage.provider.js';
import { GCSStorageProvider } from './storage/gcs-storage.provider.js';
import { S3StorageProvider } from './storage/s3-storage.provider.js';
import { AzureStorageProvider } from './storage/azure-storage.provider.js';

describe('DocumentStorageService', () => {
  let storageService: DocumentStorageService;
  let localProvider: LocalStorageProvider;
  let gcsProvider: GCSStorageProvider;
  let s3Provider: S3StorageProvider;
  let azureProvider: AzureStorageProvider;

  beforeEach(() => {
    localProvider = new LocalStorageProvider('/tmp/test-doc-storage');
    gcsProvider = new GCSStorageProvider();
    s3Provider = new S3StorageProvider();
    azureProvider = new AzureStorageProvider();
    storageService = new DocumentStorageService(localProvider, gcsProvider, s3Provider, azureProvider);
  });

  it('should upload and download file using Local Storage Provider', async () => {
    const file = {
      filename: 'test.pdf',
      mimetype: 'application/pdf',
      size: 100,
      buffer: Buffer.from('Hello Local Storage Document Content'),
    };

    const uploadRes = await storageService.upload(file, 'LOCAL');
    assert.ok(uploadRes.storageKey);
    assert.strictEqual(uploadRes.storageProvider, 'LOCAL');
    assert.strictEqual(uploadRes.size, file.buffer.length);

    const downloadRes = await storageService.download(uploadRes.storageKey, 'LOCAL');
    assert.ok(downloadRes);
    const downloadedBuf = Buffer.isBuffer(downloadRes) ? downloadRes : Buffer.from(downloadRes as any);
    assert.strictEqual(downloadedBuf.toString(), 'Hello Local Storage Document Content');
  });

  it('should support GCS, S3, and Azure Storage Provider interfaces', async () => {
    const file = {
      filename: 'report.docx',
      mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      size: 200,
      buffer: Buffer.from('Docx content buffer'),
    };

    const gcsRes = await storageService.upload(file, 'GCS');
    assert.strictEqual(gcsRes.storageProvider, 'GCS');
    assert.ok(gcsRes.storageKey.startsWith('gs://'));

    const s3Res = await storageService.upload(file, 'S3');
    assert.strictEqual(s3Res.storageProvider, 'S3');
    assert.ok(s3Res.storageKey.startsWith('s3://'));

    const azureRes = await storageService.upload(file, 'AZURE');
    assert.strictEqual(azureRes.storageProvider, 'AZURE');
    assert.ok(azureRes.storageKey.startsWith('azure://'));
  });

  it('should generate signed URL for storage key', async () => {
    const url = await storageService.getSignedUrl('docs/123-test.pdf', 'LOCAL', 1800);
    assert.ok(url.includes('123-test.pdf'));
  });
});
