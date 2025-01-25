import { UUID } from 'node:crypto';

export interface CreateAppointmentDto {
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
}
