import { UUID } from 'node:crypto';

export interface AvailableSlotResponse {
  id: UUID;
  time: Date;
  doctorId: UUID;
  doctorName: string;
  cost: number;
}
