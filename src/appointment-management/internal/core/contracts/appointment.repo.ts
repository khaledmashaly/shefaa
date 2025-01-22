import { UUID } from 'node:crypto';
import { Appointment } from '../models/appointment';

export abstract class AppointmentRepo {
  abstract getById(id: UUID): Appointment | undefined;
  abstract listUpcomingAppointments(): Appointment[];
  abstract save(appointment: Appointment): void;
}
