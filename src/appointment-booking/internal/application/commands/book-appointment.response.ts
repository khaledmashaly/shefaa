import { UUID } from 'node:crypto';

export interface BookAppointmentResponse {
  id: UUID;
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
  reservedAt: Date;
  status: string;
}
