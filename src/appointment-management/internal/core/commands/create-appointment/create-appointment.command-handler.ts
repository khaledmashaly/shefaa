import { Injectable } from '@nestjs/common';
import { CreateAppointmentCommand } from './create-appointment.command';
import { CreateAppointmentResponse } from './create-appointment.response';
import { AppointmentRepo } from '../../contracts/appointment.repo';
import { Appointment } from '../../models/appointment';

@Injectable()
export class CreateAppointmentCommandHandler {
  constructor(private readonly appointmentRepo: AppointmentRepo) {}

  execute(command: CreateAppointmentCommand): CreateAppointmentResponse {
    const appointment = Appointment.new({
      slotId: command.slotId,
      slotTime: command.slotTime,
      patientId: command.patientId,
      patientName: command.patientName,
    });

    this.appointmentRepo.save(appointment);

    return appointment;
  }
}
