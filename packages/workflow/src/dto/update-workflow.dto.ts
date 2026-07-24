import { IsOptional, IsString, IsArray, IsObject, IsInt, Min } from 'class-validator';

export class UpdateWorkflowDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsObject()
  @IsOptional()
  trigger?: Record<string, any>;

  @IsArray()
  @IsOptional()
  steps?: any[];

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
}
