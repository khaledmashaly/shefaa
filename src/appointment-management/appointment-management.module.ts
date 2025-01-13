import { Module } from '@nestjs/common';
import { AppointmentService } from './internal/appointment.service';
import { AppointmentController } from './internal/appointment.controller';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentManagementModule {}
