import { IsNotEmpty, IsOptional, IsString, IsObject, IsInt, Min } from 'class-validator';

export class PublishEventDto {
  @IsString()
  @IsNotEmpty()
  eventName!: string;

  @IsString()
  @IsNotEmpty()
  eventType!: string;

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

  @IsString()
  @IsOptional()
  causationId?: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  version?: number = 1;

  @IsString()
  @IsNotEmpty()
  source!: string;

  @IsObject()
  @IsNotEmpty()
  payload!: any;

  @IsObject()
  @IsOptional()
  metadata?: any;
}
