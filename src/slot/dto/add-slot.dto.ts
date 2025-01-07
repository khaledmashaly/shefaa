import { UUID } from 'node:crypto';

export class AddSlotDto {
  time: Date;
  doctorId: UUID;
  doctorName: string;
  cost: number;
}
