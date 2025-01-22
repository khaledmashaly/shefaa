import { randomUUID, UUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Slot } from '../../data/entities/slot.entity';
import { SlotRepo } from '../../data/repos/slot.repo';

@Injectable()
export class SlotService {
  constructor(private readonly slotRepo: SlotRepo) {}

  add(params: AddSlotParams) {
    const slot = this.createSlot(params);
    return this.slotRepo.add(slot);
  }

  list() {
    return this.slotRepo.list();
  }

  private createSlot(params: CreateSlotParams): Slot {
    const newSlot = new Slot();

    newSlot.id = randomUUID();
    newSlot.time = params.time;
    newSlot.doctorId = params.doctorId;
    newSlot.doctorName = params.doctorName;
    newSlot.cost = params.cost;
    newSlot.isReserved = false;

    return newSlot;
  }
}

type AddSlotParams = {
  time: Date;
  doctorId: UUID;
  doctorName: string;
  cost: number;
};

type CreateSlotParams = AddSlotParams;
