export type ArchiveStoragePlatformCode =
  | 'SBB_SECURE_FS_WORM'
  | 'GLACIER_DEEP_COMPLIANT'
  | 'IPFS_DECENTRALIZED_MUTABLE'
  | 'CH_FEDERAL_GOVERNMENT_VAULT';

export interface ArchiveReference {
  readonly referenceId: string;
  readonly storagePlatform: ArchiveStoragePlatformCode;
  readonly storageObjectURI: string; // e.g. "worm://vault01/finance/annual-2026.pdf.enc"
  readonly fileSha256ChecksumString: string;
  readonly encryptedAt: Date;
  readonly encryptionKeyIdentifierString: string;
}
