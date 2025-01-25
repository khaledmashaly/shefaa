import { Module } from '@nestjs/common';
import { DoctorAvailabilityModule } from './doctor-availability/doctor-availability.module';
import { AppointmentManagementModule } from './appointment-management/appointment-management.module';
import { AppointmentBookingModule } from './appointment-booking/appointment-booking.module';
import { ConfirmationModule } from './confirmation/confirmation.module';

@Module({
  imports: [
    DoctorAvailabilityModule,
    AppointmentManagementModule,
    AppointmentBookingModule,
    ConfirmationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
