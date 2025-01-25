import { Injectable } from '@nestjs/common';
import { Slot } from '../entities/slot.entity';
import { UUID } from 'node:crypto';

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

  getAvailableById(id: UUID): Slot | undefined {
    return this.slots.find(
      (slot) => slot.id === id && this.isAvailableAndUpcoming(slot),
    );
  }

  listAvailable(): Slot[] {
    return this.slots.filter(this.isAvailableAndUpcoming);
  }

  save(slot: Slot): Slot {
    const index = this.slots.findIndex((s) => s.id === slot.id);
    this.slots[index] = slot;
    return slot;
  }

  isAvailableAndUpcoming(slot: Slot): boolean {
    return slot.isReserved === false && slot.time > new Date();
  }
}
