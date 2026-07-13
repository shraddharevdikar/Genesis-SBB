export interface Observer {
  readonly observerId: string;
  readonly roleId: string;
  readonly alertOnStatusChange: boolean;
  readonly addedAt: Date;
}
