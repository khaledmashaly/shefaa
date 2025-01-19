import { Injectable } from '@nestjs/common';
import { Appointment } from '../../../core/models/appointment';
import { AppointmentDto } from '../dtos/appointment.dto';

@Injectable()
export class AppointmentApiMapper {
  toDto(appointment: Appointment): AppointmentDto {
    return {
      id: appointment.id,
      slotId: appointment.slotId,
      slotTime: appointment.slotTime.toISOString(),
      patientId: appointment.patientId,
      patientName: appointment.patientName,
      reservedAt: appointment.reservedAt.toISOString(),
      status: appointment.status,
    };
  }
}
