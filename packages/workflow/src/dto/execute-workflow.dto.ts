import { IsOptional, IsString, IsObject } from 'class-validator';

export class ExecuteWorkflowDto {
  @IsObject()
  @IsOptional()
  input?: Record<string, any>;

  @IsObject()
  @IsOptional()
  variables?: Record<string, any>;

  @IsString()
  @IsOptional()
  tenantId?: string;

  @IsString()
  @IsOptional()
  organizationId?: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  correlationId?: string;
}
