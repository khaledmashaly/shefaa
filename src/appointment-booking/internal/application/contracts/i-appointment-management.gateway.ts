import { AppointmentReadDto } from '../../../../appointment-management/shared/dtos/appointment-read.dto';
import { CreateAppointmentDto } from '../../../../appointment-management/shared/dtos/create-appointment.dto';

export abstract class IAppointmentManagementGateway {
  abstract createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): AppointmentReadDto;
}
