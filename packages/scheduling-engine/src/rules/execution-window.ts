import { ScheduleId } from '../identity/schedule-id.js';

export interface ExecutionWindow {
  readonly windowId: string;
  readonly scheduleId: ScheduleId;
  readonly name: string;
  readonly allowedDaysOfWeek: number[]; // 0-6 (Sunday-Saturday)
  readonly startHour: number; // 0-23
  readonly startMinute: number; // 0-59
  readonly endHour: number; // 0-23
  readonly endMinute: number; // 0-59
  readonly actionOnOutsideWindow: 'QUEUE' | 'DELAY_TO_NEXT_WINDOW' | 'DISCARD';
}
