import { Module } from '@nestjs/common';
import { DoctorAvailabilityModule } from './doctor-availability/doctor-availability.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [DoctorAvailabilityModule, AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
