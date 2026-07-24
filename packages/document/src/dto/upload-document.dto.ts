import { IsString, IsOptional, IsArray, IsEnum, IsNumber, Min } from 'class-validator';
import { DOCUMENT_CATEGORIES, RETENTION_POLICIES, STORAGE_PROVIDERS } from '../constants/document.constants.js';

export class UploadDocumentDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  folderId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsEnum(DOCUMENT_CATEGORIES)
  category?: string;

  @IsOptional()
  @IsEnum(RETENTION_POLICIES)
  retentionPolicy?: string;

  @IsOptional()
  @IsEnum(STORAGE_PROVIDERS)
  storageProvider?: string;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  organizationId?: string;

  @IsOptional()
  @IsString()
  ownerId?: string;
}
