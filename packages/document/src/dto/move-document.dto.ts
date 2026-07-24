import { IsString, IsOptional } from 'class-validator';

export class MoveDocumentDto {
  @IsOptional()
  @IsString()
  folderId?: string | null;
}

export class CopyDocumentDto {
  @IsOptional()
  @IsString()
  folderId?: string | null;

  @IsOptional()
  @IsString()
  newName?: string;
}
