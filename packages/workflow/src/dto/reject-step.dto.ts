import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RejectStepDto {
  @IsString()
  @IsNotEmpty()
  stepId!: string;

  @IsString()
  @IsNotEmpty()
  approverId!: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsString()
  @IsOptional()
  tenantId?: string;
}
