import { UUID } from 'node:crypto';

export type BookAppointmentDto = {
  slotId: UUID;
  patientId: UUID;
  patientName: string;
};
