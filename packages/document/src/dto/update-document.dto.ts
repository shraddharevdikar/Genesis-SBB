import { IsString, IsOptional, IsArray, IsEnum, IsBoolean } from 'class-validator';
import { DOCUMENT_CATEGORIES, RETENTION_POLICIES } from '../constants/document.constants.js';

export class UpdateDocumentDto {
  @IsOptional()
  @IsString()
  name?: string;

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
  @IsBoolean()
  isFavorite?: boolean;

  @IsOptional()
  @IsString()
  versionComment?: string;
}
