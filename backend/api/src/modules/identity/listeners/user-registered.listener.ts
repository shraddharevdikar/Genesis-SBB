import { Injectable } from '@nestjs/common';
import { UserRegisteredEvent } from '../events/user-registered.event';

@Injectable()
export class UserRegisteredListener {
  /**
   * Listens for UserRegisteredEvent to handle post-registration jobs.
   * e.g., dispatching welcome emails, creating defaults.
   */
  async handleUserRegistered(event: UserRegisteredEvent): Promise<void> {
    // TODO: Send activation email, set up default accounts, dispatch external analytics webhooks
    console.log(`User registered event received for user: ${event.userId} (${event.email})`);
  }
}
