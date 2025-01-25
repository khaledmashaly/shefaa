import { Module } from '@nestjs/common';
import { ListAvailableSlotsController } from './internal/api/controllers/list-available-slots.controller';
import { ListAvailableSlotsQueryHandler } from './internal/application/queries/list-available-slots/list-available-slots.query-handler';
import { DoctorAvailabilityGateway } from './internal/infrastructure/gateways/doctor-availability.gateway';
import { DoctorAvailabilityModule } from '../doctor-availability/doctor-availability.module';
import { IDoctorAvailabilityGateway } from './internal/application/contracts/i-doctor-availability.gateway';
import { IAppointmentManagementGateway } from './internal/application/contracts/i-appointment-management.gateway';
import { AppointmentManagementGateway } from './internal/infrastructure/gateways/appointment-management.gateway';
import { AppointmentManagementModule } from '../appointment-management/appointment-management.module';
import { BookAppointmentController } from './internal/api/controllers/book-appointment.controller';
import { BookAppointmentCommandHandler } from './internal/application/commands/book-appointment.command-handler';

const doctorAvailabilityGatewayProvider = {
  provide: IDoctorAvailabilityGateway,
  useClass: DoctorAvailabilityGateway,
};

const appointmentManagementGatewayProvider = {
  provide: IAppointmentManagementGateway,
  useClass: AppointmentManagementGateway,
};

@Module({
  imports: [DoctorAvailabilityModule, AppointmentManagementModule],
  controllers: [ListAvailableSlotsController, BookAppointmentController],
  providers: [
    ListAvailableSlotsQueryHandler,
    BookAppointmentCommandHandler,
    doctorAvailabilityGatewayProvider,
    appointmentManagementGatewayProvider,
  ],
})
export class AppointmentBookingModule {}
