import { UUID } from 'node:crypto';
import { SlotReadDto } from '../dto/slot-read.dto';
import { Injectable } from '@nestjs/common';
import { SlotService } from '../../internal/business/services/slot.service';

@Injectable()
export class DoctorAvailabilityApi {
  constructor(private readonly slotService: SlotService) {}

  reserveSlot(id: UUID): SlotReadDto {
    return this.slotService.reserveSlot(id);
  }

  listAvailableSlots(): SlotReadDto[] {
    return this.slotService.listAvailable();
  }
}
