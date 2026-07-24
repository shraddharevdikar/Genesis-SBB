import { IsString, IsOptional, IsEnum, IsBoolean, IsArray } from 'class-validator';
import { NOTIFICATION_CHANNELS, NotificationChannel } from '../constants/notification.constants.js';

export class UpdateTemplateDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsEnum(NOTIFICATION_CHANNELS)
  channel?: NotificationChannel;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  variables?: string[];

  @IsOptional()
  @IsBoolean()
  isSystem?: boolean;
}
