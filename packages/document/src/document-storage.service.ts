import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { IStorageProvider, StorageFile, StorageObject } from './interfaces/storage-provider.interface.js';
import { LocalStorageProvider } from './storage/local-storage.provider.js';
import { GCSStorageProvider } from './storage/gcs-storage.provider.js';
import { S3StorageProvider } from './storage/s3-storage.provider.js';
import { AzureStorageProvider } from './storage/azure-storage.provider.js';
import { STORAGE_PROVIDERS } from './constants/document.constants.js';
import { Readable } from 'node:stream';

@Injectable()
export class DocumentStorageService {
  private readonly logger = new Logger(DocumentStorageService.name);
  private readonly providers = new Map<string, IStorageProvider>();
  private defaultProviderName: string = STORAGE_PROVIDERS.LOCAL;

  constructor(
    localStorage: LocalStorageProvider,
    gcsStorage: GCSStorageProvider,
    s3Storage: S3StorageProvider,
    azureStorage: AzureStorageProvider,
  ) {
    this.registerProvider(localStorage);
    this.registerProvider(gcsStorage);
    this.registerProvider(s3Storage);
    this.registerProvider(azureStorage);
  }

  registerProvider(provider: IStorageProvider): void {
    this.providers.set(provider.name, provider);
    this.logger.log(`Registered storage provider: ${provider.name}`);
  }

  getProvider(providerName?: string): IStorageProvider {
    const target = providerName || this.defaultProviderName;
    const provider = this.providers.get(target);
    if (!provider) {
      throw new NotFoundException(`Storage provider '${target}' is not registered`);
    }
    return provider;
  }

  async upload(file: StorageFile, providerName?: string, keyPrefix?: string): Promise<StorageObject> {
    const provider = this.getProvider(providerName);
    const startTime = Date.now();
    const result = await provider.upload(file, keyPrefix);
    const duration = Date.now() - startTime;
    this.logger.log(`Uploaded file via ${provider.name} in ${duration}ms, size: ${result.size} bytes`);
    return result;
  }

  async download(storageKey: string, providerName?: string): Promise<Readable | Buffer> {
    const provider = this.getProvider(providerName);
    const startTime = Date.now();
    const result = await provider.download(storageKey);
    const duration = Date.now() - startTime;
    this.logger.log(`Downloaded storage key ${storageKey} via ${provider.name} in ${duration}ms`);
    return result;
  }

  async delete(storageKey: string, providerName?: string): Promise<boolean> {
    const provider = this.getProvider(providerName);
    return provider.delete(storageKey);
  }

  async exists(storageKey: string, providerName?: string): Promise<boolean> {
    const provider = this.getProvider(providerName);
    return provider.exists(storageKey);
  }

  async getSignedUrl(storageKey: string, providerName?: string, expiresInSeconds: number = 3600): Promise<string> {
    const provider = this.getProvider(providerName);
    if (provider.getSignedUrl) {
      return provider.getSignedUrl(storageKey, expiresInSeconds);
    }
    return `/api/documents/download/signed?key=${encodeURIComponent(storageKey)}`;
  }
}
