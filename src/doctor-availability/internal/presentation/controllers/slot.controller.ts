import { Controller, Post, Body, Get } from '@nestjs/common';
import { AddSlotDto } from '../dto/add-slot.dto';
import { SlotService } from '../../business/services/slot.service';

@Controller('slot')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  add(@Body() addSlotDto: AddSlotDto) {
    return this.slotService.add(addSlotDto);
  }

  @Get()
  list() {
    return this.slotService.list();
  }
}
