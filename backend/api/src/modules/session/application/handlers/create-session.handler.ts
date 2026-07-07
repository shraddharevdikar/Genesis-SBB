import { Injectable, Inject } from '@nestjs/common';
import { CreateSessionCommand } from '../commands/create-session.command.js';
import { ISessionRepository } from '../../domain/repositories/session-repository.interface.js';
import { Session } from '../../domain/entities/session.entity.js';
import { SessionId } from '../../domain/value-objects/session-id.value-object.js';
import { DeviceId } from '../../domain/value-objects/device-id.value-object.js';

@Injectable()
export class CreateSessionHandler {
  constructor(
    @Inject('ISessionRepository')
    private readonly sessionRepository: ISessionRepository
  ) {}

  public async handle(command: CreateSessionCommand): Promise<void> {
    const sessionId = new SessionId(command.sessionId);
    const deviceId = new DeviceId(command.deviceId);

    // Create session entity
    const session = Session.create(
      sessionId,
      command.userId,
      command.tenantId,
      deviceId,
      command.authenticationProvider,
      command.durationMs
    );

    // Persist session
    await this.sessionRepository.save(session);
  }
}
