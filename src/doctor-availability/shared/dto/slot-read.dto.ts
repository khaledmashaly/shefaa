import { UUID } from 'node:crypto';

export interface SlotReadDto {
  id: UUID;
  time: Date;
  doctorId: UUID;
  doctorName: string;
  isReserved: boolean;
  cost: number;
}
