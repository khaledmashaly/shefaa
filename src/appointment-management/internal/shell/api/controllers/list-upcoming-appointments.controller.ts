import { Controller, Get } from '@nestjs/common';
import { ListUpcomingAppointmentsQueryHandler } from '../../../core/queries/list-upcoming-appointments/list-upcoming-appointments.query-handler';
import { AppointmentDto } from '../dtos/appointment.dto';
import { AppointmentApiMapper } from '../mappers/appointment.api-mapper';

@Controller()
export class ListUpcomingAppointmentsController {
  constructor(
    private readonly handler: ListUpcomingAppointmentsQueryHandler,
    private readonly mapper: AppointmentApiMapper,
  ) {}

  @Get('/upcoming-appointments')
  listUpcomingAppointments(): AppointmentDto[] {
    const appointments = this.handler.execute();
    return appointments.map(this.mapper.toDto);
  }
}
