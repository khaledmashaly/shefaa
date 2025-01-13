import { UUID } from 'node:crypto';

export class AddAppointmentDto {
  slotId: UUID;
  patientId: UUID;
  patientName: string;
}
