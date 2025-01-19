import { UUID } from 'node:crypto';
import { Appointment } from '../models/appointment';

export interface AppointmentRepo {
  getById(id: UUID): Appointment | undefined;
  listUpcomingAppointments(): Appointment[];
  save(appointment: Appointment): void;
}
