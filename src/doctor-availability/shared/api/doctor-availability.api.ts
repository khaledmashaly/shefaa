import { UUID } from 'node:crypto';
import { SlotRepo } from '../../internal/data/repos/slot.repo';
import { SlotReadDto } from '../dto/slot-read.dto';

export class DoctorAvailabilityApi {
  constructor(private readonly slotRepo: SlotRepo) {}

  getSlotById(id: UUID): SlotReadDto | undefined {
    return this.slotRepo.getById(id);
  }

  listAvailableSlots(): SlotReadDto[] {
    return this.slotRepo.listAvailable();
  }
}
