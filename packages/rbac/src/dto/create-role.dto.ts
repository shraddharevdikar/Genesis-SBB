import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateRoleDto {
  @IsUUID(4, { message: 'Organization ID must be a valid UUID' })
  @IsNotEmpty({ message: 'Organization ID is required' })
  organizationId!: string;

  @IsString()
  @IsNotEmpty({ message: 'Role name is required' })
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;
}
