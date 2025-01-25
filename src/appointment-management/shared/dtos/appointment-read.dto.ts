import { UUID } from 'node:crypto';

export interface AppointmentReadDto {
  id: UUID;
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
  reservedAt: Date;
  status: string;
}
