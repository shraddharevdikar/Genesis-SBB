import { Injectable, Logger } from '@nestjs/common';
import { IStorageProvider, StorageFile, StorageObject } from '../interfaces/storage-provider.interface.js';
import { STORAGE_PROVIDERS } from '../constants/document.constants.js';
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';

@Injectable()
export class GCSStorageProvider implements IStorageProvider {
  readonly name = STORAGE_PROVIDERS.GCS;
  private readonly logger = new Logger(GCSStorageProvider.name);
  private readonly mockStore = new Map<string, Buffer>();

  async upload(file: StorageFile, keyPrefix: string = 'docs'): Promise<StorageObject> {
    const fileId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const storageKey = `gs://genesis-bucket/${keyPrefix}/${fileId}-${file.filename}`;
    
    let buffer = file.buffer || Buffer.from('');
    const checksum = createHash('sha256').update(buffer).digest('hex');
    this.mockStore.set(storageKey, buffer);

    this.logger.log(`[GCS Provider Interface] Uploaded file to GCS: ${storageKey}`);

    return {
      storageKey,
      storageProvider: this.name,
      size: buffer.length || file.size,
      checksum,
      url: `https://storage.googleapis.com/genesis-bucket/${storageKey}`,
    };
  }

  async download(storageKey: string): Promise<Readable | Buffer> {
    const data = this.mockStore.get(storageKey);
    if (!data) {
      return Buffer.from(`[GCS Storage Stream Content for ${storageKey}]`);
    }
    return data;
  }

  async delete(storageKey: string): Promise<boolean> {
    this.logger.log(`[GCS Provider Interface] Deleted file from GCS: ${storageKey}`);
    return this.mockStore.delete(storageKey);
  }

  async exists(storageKey: string): Promise<boolean> {
    return this.mockStore.has(storageKey);
  }

  async getSignedUrl(storageKey: string, expiresInSeconds: number = 3600): Promise<string> {
    return `https://storage.googleapis.com/genesis-bucket/${storageKey}?signed=true&expires=${expiresInSeconds}`;
  }
}
