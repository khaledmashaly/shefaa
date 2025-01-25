import { Injectable } from '@nestjs/common';
import { IDoctorAvailabilityGateway } from '../../contracts/i-doctor-availability.gateway';
import { AvailableSlotResponse } from './available-slot.response';

@Injectable()
export class ListAvailableSlotsQueryHandler {
  constructor(
    private readonly doctorAvailabilityGateway: IDoctorAvailabilityGateway,
  ) {}

  execute(): AvailableSlotResponse[] {
    const availableSlots = this.doctorAvailabilityGateway.listAvailableSlots();

    return availableSlots.map(
      ({ isReserved, ...availableSlot }) => availableSlot,
    );
  }
}
