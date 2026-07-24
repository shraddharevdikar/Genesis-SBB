import { IsString, IsOptional, IsEnum, IsBoolean, IsObject } from 'class-validator';
import { DIGEST_MODE, DigestMode } from '../constants/notification.constants.js';

export class UpdatePreferenceDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsObject()
  channels?: Record<string, boolean>;

  @IsOptional()
  @IsObject()
  quietHours?: {
    enabled: boolean;
    start: string;
    end: string;
    timezone?: string;
  };

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsEnum(DIGEST_MODE)
  digestMode?: DigestMode;

  @IsOptional()
  @IsBoolean()
  emergencyOverride?: boolean;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  organizationId?: string;
}

export class TenantSettingsDto {
  @IsString()
  tenantId!: string;

  @IsOptional()
  @IsObject()
  defaultSender?: {
    email?: string;
    name?: string;
    phoneNumber?: string;
  };

  @IsOptional()
  @IsObject()
  branding?: {
    logoUrl?: string;
    primaryColor?: string;
    emailFooter?: string;
  };

  @IsOptional()
  @IsObject()
  policies?: {
    allowEmergencyOverride?: boolean;
    quietHoursEnforced?: boolean;
    maxBatchSize?: number;
  };
}
