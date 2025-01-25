import { Injectable } from '@nestjs/common';
import { IAppointmentManagementGateway } from '../../application/contracts/i-appointment-management.gateway';
import { AppointmentManagementApi } from '../../../../appointment-management/shared/apis/appointment-management.api';
import { AppointmentReadDto } from '../../../../appointment-management/shared/dtos/appointment-read.dto';
import { CreateAppointmentDto } from '../../../../appointment-management/shared/dtos/create-appointment.dto';

@Injectable()
export class AppointmentManagementGateway
  implements IAppointmentManagementGateway
{
  constructor(
    private readonly appointmentManagementApi: AppointmentManagementApi,
  ) {}

  createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): AppointmentReadDto {
    return this.appointmentManagementApi.createAppointment(
      createAppointmentDto,
    );
  }
}
