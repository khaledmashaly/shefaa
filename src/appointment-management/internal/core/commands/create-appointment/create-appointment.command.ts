import { UUID } from 'node:crypto';

export interface CreateAppointmentCommand {
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
}
