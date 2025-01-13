import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AddAppointmentDto } from './dto/add-appointment.dto';
import { UpdateAppointmentStatusDto } from './dto/update-appointment-status.dto';
import { UUID } from 'node:crypto';
import { Appointment } from './entities/appointment.entity';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() addAppointmentDto: AddAppointmentDto): Appointment {
    return this.appointmentService.add(addAppointmentDto);
  }

  @Get()
  list(): Appointment[] {
    return this.appointmentService.list();
  }

  @Patch(':id/status')
  findOne(
    @Param('id') id: UUID,
    @Body() updateAppointmentStatusDto: UpdateAppointmentStatusDto,
  ) {
    return this.appointmentService.updateStatus({
      id,
      newStatus: updateAppointmentStatusDto.status,
    });
  }
}
