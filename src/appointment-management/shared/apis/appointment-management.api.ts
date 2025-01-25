import { Injectable } from '@nestjs/common';
import { CreateAppointmentCommandHandler } from '../../internal/core/commands/create-appointment/create-appointment.command-handler';
import { AppointmentReadDto } from '../dtos/appointment-read.dto';
import { CreateAppointmentDto } from '../dtos/create-appointment.dto';

@Injectable()
export class AppointmentManagementApi {
  constructor(
    private readonly createAppointmentCommandHandler: CreateAppointmentCommandHandler,
  ) {}

  createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): AppointmentReadDto {
    return this.createAppointmentCommandHandler.execute(createAppointmentDto);
  }
}
