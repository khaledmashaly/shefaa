import { UUID } from 'node:crypto';
import { AppointmentRepo } from '../../../core/contracts/appointment.repo';
import { Appointment } from '../../../core/models/appointment';
import { AppointmentEntity } from '../entities/appointment.entity';
import { AppointmentDomainMapper } from './mappers/appointment.domain-mapper';

export class InMemoryAppointmentRepo implements AppointmentRepo {
  private appointments: AppointmentEntity[] = [];

  constructor(private readonly mapper: AppointmentDomainMapper) {}

  getById(id: UUID): Appointment | undefined {
    const appointment = this.appointments.find((a) => a.id === id);
    return appointment ? this.mapper.toDomain(appointment) : undefined;
  }

  listUpcomingAppointments(): Appointment[] {
    return this.appointments.filter(this.isUpcoming).map(this.mapper.toDomain);
  }

  save(appointment: Appointment): void {
    const entity = this.mapper.toEntity(appointment);

    const existingIndex = this.appointments.findIndex(
      (a) => a.id === entity.id,
    );

    if (existingIndex === -1) {
      this.appointments.push(entity);
    } else {
      this.appointments[existingIndex] = entity;
    }
  }

  private isUpcoming(appointment: AppointmentEntity): boolean {
    return appointment.slotTime > new Date();
  }
}
