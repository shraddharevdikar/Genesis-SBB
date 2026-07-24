import { Injectable, Logger } from '@nestjs/common';
import { IStorageProvider, StorageFile, StorageObject } from '../interfaces/storage-provider.interface.js';
import { STORAGE_PROVIDERS } from '../constants/document.constants.js';
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import * as fs from 'node:fs';
import * as path from 'node:path';

@Injectable()
export class LocalStorageProvider implements IStorageProvider {
  readonly name = STORAGE_PROVIDERS.LOCAL;
  private readonly logger = new Logger(LocalStorageProvider.name);
  private readonly storageDir: string;
  private readonly memoryStore = new Map<string, { buffer: Buffer; mimetype: string }>();

  constructor(baseDir: string = '/tmp/genesis-document-storage') {
    this.storageDir = baseDir;
    try {
      if (!fs.existsSync(this.storageDir)) {
        fs.mkdirSync(this.storageDir, { recursive: true });
      }
    } catch (err: any) {
      this.logger.warn(`Could not create storage directory ${this.storageDir}, falling back to memory map: ${err.message}`);
    }
  }

  async upload(file: StorageFile, keyPrefix: string = 'docs'): Promise<StorageObject> {
    const fileId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const storageKey = `${keyPrefix}/${fileId}-${file.filename}`;
    
    let buffer: Buffer;
    if (file.buffer) {
      buffer = file.buffer;
    } else if (file.stream) {
      buffer = await this.streamToBuffer(file.stream);
    } else {
      buffer = Buffer.from('');
    }

    const checksum = createHash('sha256').update(buffer).digest('hex');
    const size = buffer.length;

    try {
      const fullPath = path.join(this.storageDir, storageKey);
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(fullPath, buffer);
    } catch (err: any) {
      this.logger.warn(`Writing to disk failed for key ${storageKey}, using memory fallback: ${err.message}`);
      this.memoryStore.set(storageKey, { buffer, mimetype: file.mimetype });
    }

    return {
      storageKey,
      storageProvider: this.name,
      size,
      checksum,
      url: `/api/documents/file/${encodeURIComponent(storageKey)}`,
    };
  }

  async download(storageKey: string): Promise<Readable | Buffer> {
    if (this.memoryStore.has(storageKey)) {
      return this.memoryStore.get(storageKey)!.buffer;
    }

    const fullPath = path.join(this.storageDir, storageKey);
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath);
    }

    throw new Error(`File with storage key ${storageKey} not found in Local Storage`);
  }

  async delete(storageKey: string): Promise<boolean> {
    if (this.memoryStore.has(storageKey)) {
      this.memoryStore.delete(storageKey);
      return true;
    }

    const fullPath = path.join(this.storageDir, storageKey);
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      return true;
    }

    return false;
  }

  async exists(storageKey: string): Promise<boolean> {
    if (this.memoryStore.has(storageKey)) {
      return true;
    }
    const fullPath = path.join(this.storageDir, storageKey);
    return fs.existsSync(fullPath);
  }

  async getSignedUrl(storageKey: string, expiresInSeconds: number = 3600): Promise<string> {
    return `/api/documents/download/signed?key=${encodeURIComponent(storageKey)}&expires=${Date.now() + expiresInSeconds * 1000}`;
  }

  private async streamToBuffer(stream: Readable): Promise<Buffer> {
    const chunks: Buffer[] = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
  }
}
