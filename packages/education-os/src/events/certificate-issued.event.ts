import { Certificate } from '../certification/certificate.js';
import { EducationContext } from '../core/education-context.js';

export interface CertificateIssuedEvent {
  readonly eventId: string;
  readonly eventName: 'CERTIFICATE_ISSUED';
  readonly payload: {
    readonly certificate: Certificate;
  };
  readonly context: EducationContext;
}
