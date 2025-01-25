import { Controller, Get } from '@nestjs/common';
import { ListAvailableSlotsQueryHandler } from '../../application/queries/list-available-slots/list-available-slots.query-handler';
import { AvailableSlotResponse } from '../../application/queries/list-available-slots/available-slot.response';

@Controller()
export class ListAvailableSlotsController {
  constructor(private readonly handler: ListAvailableSlotsQueryHandler) {}

  @Get('available-slots')
  listAvailableSlots(): AvailableSlotResponse[] {
    return this.handler.execute();
  }
}
