import { Readable } from 'node:stream';

export interface StorageFile {
  filename: string;
  mimetype: string;
  size: number;
  buffer?: Buffer;
  stream?: Readable;
}

export interface StorageObject {
  storageKey: string;
  storageProvider: string;
  size: number;
  checksum: string;
  url?: string;
}

export interface IStorageProvider {
  readonly name: string;
  upload(file: StorageFile, keyPrefix?: string): Promise<StorageObject>;
  download(storageKey: string): Promise<Readable | Buffer>;
  delete(storageKey: string): Promise<boolean>;
  exists(storageKey: string): Promise<boolean>;
  getSignedUrl?(storageKey: string, expiresInSeconds?: number): Promise<string>;
}
