import { UUID } from 'node:crypto';

export interface AppointmentDto {
  id: UUID;
  slotId: UUID;
  slotTime: string;
  patientId: UUID;
  patientName: string;
  reservedAt: string;
  status: string;
}
