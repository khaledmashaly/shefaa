import { randomUUID, UUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Slot } from '../../data/entities/slot.entity';
import { SlotRepo } from '../../data/repos/slot.repo';
import { SlotNotFoundException } from '../exceptions/slot-not-found.exception';

@Injectable()
export class SlotService {
  constructor(private readonly slotRepo: SlotRepo) {}

  add(params: AddSlotParams): Slot {
    const slot = this.createSlot(params);
    return this.slotRepo.add(slot);
  }

  list(): Slot[] {
    return this.slotRepo.list();
  }

  listAvailable(): Slot[] {
    return this.slotRepo.listAvailable();
  }

  reserveSlot(id: UUID): Slot {
    const slot = this.slotRepo.getAvailableById(id);

    if (!slot) {
      throw new SlotNotFoundException();
    }

    slot.isReserved = true;
    return this.slotRepo.save(slot);
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
