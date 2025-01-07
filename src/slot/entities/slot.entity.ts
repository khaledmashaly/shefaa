import { UUID } from 'node:crypto';

export class Slot {
  id: UUID;
  time: Date;
  doctorId: UUID;
  doctorName: string;
  isReserved: boolean;
  cost: number;
}
