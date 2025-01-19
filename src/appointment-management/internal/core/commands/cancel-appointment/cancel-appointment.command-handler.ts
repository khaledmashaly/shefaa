import { Injectable } from '@nestjs/common';
import { AppointmentRepo } from '../../contracts/appointment.repo';
import { CancelAppointmentCommand } from './cancel-appointment.command';

@Injectable()
export class CancelAppointmentCommandHandler {
  constructor(private readonly appointmentRepo: AppointmentRepo) {}

  execute(command: CancelAppointmentCommand): void {
    const appointment = this.appointmentRepo.getById(command.appointmentId);

    if (appointment === undefined) {
      throw new Error('Appointment not found');
    }

    appointment.cancel();
    this.appointmentRepo.save(appointment);
  }
}
