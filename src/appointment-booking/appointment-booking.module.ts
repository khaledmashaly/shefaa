import { Module } from '@nestjs/common';
import { ListAvailableSlotsController } from './internal/api/controllers/list-available-slots.controller';
import { ListAvailableSlotsQueryHandler } from './internal/application/queries/list-available-slots/list-available-slots.query-handler';
import { DoctorAvailabilityGateway } from './internal/infrastructure/gateways/doctor-availability.gateway';
import { DoctorAvailabilityModule } from '../doctor-availability/doctor-availability.module';
import { IDoctorAvailabilityGateway } from './internal/application/contracts/i-doctor-availability.gateway';

const doctorAvailabilityGatewayProvider = {
  provide: IDoctorAvailabilityGateway,
  useClass: DoctorAvailabilityGateway,
};

@Module({
  imports: [DoctorAvailabilityModule],
  controllers: [ListAvailableSlotsController],
  providers: [
    ListAvailableSlotsQueryHandler,
    doctorAvailabilityGatewayProvider,
  ],
})
export class AppointmentBookingModule {}
