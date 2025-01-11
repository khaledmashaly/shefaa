import { Injectable } from '@nestjs/common';
import { Slot } from '../entities/slot.entity';

@Injectable()
export class SlotRepo {
  private readonly slots: Slot[] = [];

  add(slot: Slot): Slot {
    this.slots.push(slot);
    return slot;
  }

  list(): Slot[] {
    return this.slots;
  }
}
