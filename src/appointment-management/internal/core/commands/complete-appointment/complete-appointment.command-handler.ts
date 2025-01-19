import { Injectable } from '@nestjs/common';
import { AppointmentRepo } from '../../contracts/appointment.repo';
import { CompleteAppointmentCommand } from './complete-appointment.command';

@Injectable()
export class CompleteAppointmentCommandHandler {
  constructor(private readonly appointmentRepo: AppointmentRepo) {}

  execute(command: CompleteAppointmentCommand): void {
    const appointment = this.appointmentRepo.getById(command.appointmentId);

    if (appointment === undefined) {
      throw new Error('Appointment not found');
    }

    appointment.complete();
    this.appointmentRepo.save(appointment);
  }
}
