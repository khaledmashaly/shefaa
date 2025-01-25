import { Module } from '@nestjs/common';
import { DoctorAvailabilityModule } from './doctor-availability/doctor-availability.module';
import { AppointmentManagementModule } from './appointment-management/appointment-management.module';
import { AppointmentBookingModule } from './appointment-booking/appointment-booking.module';

@Module({
  imports: [
    DoctorAvailabilityModule,
    AppointmentManagementModule,
    AppointmentBookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
