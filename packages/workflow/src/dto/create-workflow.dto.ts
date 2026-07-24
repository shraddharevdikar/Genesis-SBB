import { IsNotEmpty, IsOptional, IsString, IsArray, IsObject, IsInt, Min } from 'class-validator';

export class CreateWorkflowDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string = 'GENERAL';

  @IsInt()
  @Min(1)
  @IsOptional()
  version?: number = 1;

  @IsObject()
  @IsNotEmpty()
  trigger!: Record<string, any>;

  @IsArray()
  @IsNotEmpty()
  steps!: any[];

  @IsObject()
  @IsOptional()
  conditions?: Record<string, any>;

  @IsInt()
  @IsOptional()
  timeout?: number;

  @IsObject()
  @IsOptional()
  retryPolicy?: Record<string, any>;

  @IsObject()
  @IsOptional()
  compensationStrategy?: Record<string, any>;

  @IsObject()
  @IsOptional()
  metadata?: Record<string, any>;

  @IsString()
  @IsOptional()
  tenantId?: string;

  @IsString()
  @IsOptional()
  organizationId?: string;
}
