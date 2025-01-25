import { UUID } from 'node:crypto';

export class AddSlotDto {
  time: string;
  doctorId: UUID;
  doctorName: string;
  cost: number;
}
