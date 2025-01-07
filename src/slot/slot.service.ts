import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { AddSlotDto } from './dto/add-slot.dto';
import { Slot } from './entities/slot.entity';

@Injectable()
export class SlotService {
  private readonly slots: Slot[] = [];

  add(addSlotDto: AddSlotDto) {
    const newSlot = new Slot();
    newSlot.id = randomUUID();
    newSlot.time = addSlotDto.time;
    newSlot.doctorId = addSlotDto.doctorId;
    newSlot.doctorName = addSlotDto.doctorName;
    newSlot.isReserved = false;
    newSlot.cost = addSlotDto.cost;

    this.slots.push(newSlot);

    return newSlot;
  }

  list() {
    return this.slots;
  }
}
