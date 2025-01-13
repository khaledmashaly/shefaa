import { Injectable, NotFoundException } from '@nestjs/common';
import { AddAppointmentDto } from './dto/add-appointment.dto';
import { Appointment, AppointmentStatus } from './entities/appointment.entity';
import { randomUUID, UUID } from 'node:crypto';

@Injectable()
export class AppointmentService {
  private readonly appointments: Appointment[] = [];

  add(addAppointmentDto: AddAppointmentDto): Appointment {
    const newAppointment = new Appointment();
    newAppointment.id = randomUUID();
    newAppointment.slotId = addAppointmentDto.slotId;
    newAppointment.patientId = addAppointmentDto.patientId;
    newAppointment.patientName = addAppointmentDto.patientName;
    newAppointment.reservedAt = new Date();
    newAppointment.status = AppointmentStatus.CREATED;

    this.appointments.push(newAppointment);

    return newAppointment;
  }

  list(): Appointment[] {
    return this.appointments;
  }

  updateStatus({ id, newStatus }: UpdateStatusParams): void {
    const appointment = this.appointments.find((a) => a.id === id);

    if (!appointment) {
      throw new NotFoundException(`Appointment with id ${id} not found`);
    }

    appointment.status = newStatus;
  }
}

type UpdateStatusParams = {
  id: UUID;
  newStatus: AppointmentStatus;
};
