import { Injectable } from '@nestjs/common';
import { BookAppointmentCommand } from './book-appointment.commands';
import { IDoctorAvailabilityGateway } from '../contracts/i-doctor-availability.gateway';
import { BookAppointmentResponse } from './book-appointment.response';
import { IAppointmentManagementGateway } from '../contracts/i-appointment-management.gateway';

@Injectable()
export class BookAppointmentCommandHandler {
  constructor(
    private readonly doctorAvailabilityGateway: IDoctorAvailabilityGateway,
    private readonly appointmentManagementGateway: IAppointmentManagementGateway,
  ) {}

  execute(command: BookAppointmentCommand): BookAppointmentResponse {
    const slot = this.doctorAvailabilityGateway.reserveSlot(command.slotId);

    return this.appointmentManagementGateway.createAppointment({
      ...command,
      slotTime: slot.time,
    });
  }
}
