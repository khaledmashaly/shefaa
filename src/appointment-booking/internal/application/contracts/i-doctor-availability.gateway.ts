import { UUID } from 'node:crypto';
import { SlotReadDto } from '../../../../doctor-availability/shared/dto/slot-read.dto';

export abstract class IDoctorAvailabilityGateway {
  abstract listAvailableSlots(): SlotReadDto[];
  abstract reserveSlot(id: UUID): SlotReadDto;
}
