import { UUID } from 'node:crypto';

export interface CreateAppointmentResponse {
  id: UUID;
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
  reservedAt: Date;
  status: string;
}
