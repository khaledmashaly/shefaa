import { DoctorAvailabilityApi } from '../../../../doctor-availability/shared/api/doctor-availability.api';
import { UUID } from 'node:crypto';
import { SlotReadDto } from '../../../../doctor-availability/shared/dto/slot-read.dto';
import { IDoctorAvailabilityGateway } from '../../application/contracts/i-doctor-availability.gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorAvailabilityGateway implements IDoctorAvailabilityGateway {
  constructor(private readonly doctorAvailabilityApi: DoctorAvailabilityApi) {}

  reserveSlot(id: UUID): SlotReadDto | undefined {
    return this.doctorAvailabilityApi.reserveSlot(id);
  }

  listAvailableSlots(): SlotReadDto[] {
    return this.doctorAvailabilityApi.listAvailableSlots();
  }
}
