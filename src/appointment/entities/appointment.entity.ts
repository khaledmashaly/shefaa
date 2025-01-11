import { UUID } from 'node:crypto';

export class Appointment {
  id: UUID;
  slotId: UUID;
  patientId: UUID;
  patientName: string;
  reservedAt: Date;
  status: AppointmentStatus;
}

export enum AppointmentStatus {
  CREATED = 'CREATED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}
