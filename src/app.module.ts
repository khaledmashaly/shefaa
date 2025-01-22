import { Module } from '@nestjs/common';
import { DoctorAvailabilityModule } from './doctor-availability/doctor-availability.module';
import { AppointmentManagementModule } from './appointment-management/appointment-management.module';

@Module({
  imports: [DoctorAvailabilityModule, AppointmentManagementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
