import { Injectable } from '@nestjs/common';
import { AppointmentRepo } from '../../contracts/appointment.repo';
import { Appointment } from '../../models/appointment';

@Injectable()
export class ListUpcomingAppointmentsQueryHandler {
  constructor(private readonly appointmentRepo: AppointmentRepo) {}

  execute(): Appointment[] {
    return this.appointmentRepo.listUpcomingAppointments();
  }
}
