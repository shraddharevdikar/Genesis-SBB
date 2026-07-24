import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ApproveStepDto {
  @IsString()
  @IsNotEmpty()
  stepId!: string;

  @IsString()
  @IsNotEmpty()
  approverId!: string;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsString()
  @IsOptional()
  tenantId?: string;
}
