import { Controller, Post, Body, Get } from '@nestjs/common';
import { AddSlotDto } from '../dto/add-slot.dto';
import { SlotService } from '../../business/services/slot.service';
import { Slot } from '../../data/entities/slot.entity';

@Controller('slot')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  add(@Body() addSlotDto: AddSlotDto): Slot {
    return this.slotService.add({
      ...addSlotDto,
      time: new Date(addSlotDto.time),
    });
  }

  @Get()
  list(): Slot[] {
    return this.slotService.list();
  }
}
