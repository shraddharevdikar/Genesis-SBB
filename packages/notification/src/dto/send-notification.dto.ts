import { IsString, IsNotEmpty, IsOptional, IsEnum, IsObject, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NOTIFICATION_CHANNELS, NOTIFICATION_PRIORITY, NotificationChannel, NotificationPriority } from '../constants/notification.constants.js';

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  recipient!: string;

  @IsOptional()
  @IsEnum(NOTIFICATION_CHANNELS)
  channel?: NotificationChannel;

  @IsOptional()
  @IsString()
  templateCode?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsObject()
  variables?: Record<string, any>;

  @IsOptional()
  @IsEnum(NOTIFICATION_PRIORITY)
  priority?: NotificationPriority;

  @IsOptional()
  @IsDateString()
  scheduledAt?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  organizationId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}

export class ScheduleNotificationDto extends SendNotificationDto {
  @IsDateString()
  @IsNotEmpty()
  declare scheduledAt?: string;
}

export class BatchSendNotificationDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SendNotificationDto)
  notifications!: SendNotificationDto[];
}
