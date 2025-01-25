import { UUID } from 'node:crypto';

export interface BookAppointmentCommand {
  slotId: UUID;
  patientId: UUID;
  patientName: string;
}
