export const STORAGE_PROVIDERS = {
  LOCAL: 'LOCAL',
  GCS: 'GCS',
  S3: 'S3',
  AZURE: 'AZURE',
} as const;

export type StorageProviderType = (typeof STORAGE_PROVIDERS)[keyof typeof STORAGE_PROVIDERS];

export const AI_PROCESSING_STATUS = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
} as const;

export type AIProcessingStatus = (typeof AI_PROCESSING_STATUS)[keyof typeof AI_PROCESSING_STATUS];

export const DOCUMENT_CATEGORIES = {
  FINANCIAL: 'FINANCIAL',
  LEGAL: 'LEGAL',
  HR: 'HR',
  TECHNICAL: 'TECHNICAL',
  GENERAL: 'GENERAL',
  MARKETING: 'MARKETING',
} as const;

export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[keyof typeof DOCUMENT_CATEGORIES];

export const RETENTION_POLICIES = {
  PERMANENT: 'PERMANENT',
  ONE_YEAR: 'ONE_YEAR',
  FIVE_YEARS: 'FIVE_YEARS',
  SEVEN_YEARS: 'SEVEN_YEARS',
  CUSTOM: 'CUSTOM',
} as const;

export type RetentionPolicy = (typeof RETENTION_POLICIES)[keyof typeof RETENTION_POLICIES];

export const DOCUMENT_PERMISSIONS = {
  CREATE: 'document:create',
  READ: 'document:read',
  UPDATE: 'document:update',
  DELETE: 'document:delete',
  SHARE: 'document:share',
  DOWNLOAD: 'document:download',
  FOLDER_CREATE: 'folder:create',
  FOLDER_UPDATE: 'folder:update',
} as const;

export const DEFAULT_CHECKSUM_ALGORITHM = 'sha256';
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;
export const DEFAULT_STORAGE_PROVIDER = STORAGE_PROVIDERS.LOCAL;
