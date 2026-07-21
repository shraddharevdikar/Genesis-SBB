import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty({ message: 'Permission key is required' })
  @Matches(/^[a-z0-9_-]+:[a-z0-9_-]+(:[a-z0-9_-]+)?$/, {
    message: 'Permission key must follow the "resource:action" or "resource:subresource:action" format',
  })
  key!: string;

  @IsString()
  @IsOptional()
  description?: string;
}
