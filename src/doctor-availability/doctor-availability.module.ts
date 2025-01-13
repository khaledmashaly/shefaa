import { Module } from '@nestjs/common';
import { SlotController } from './internal/presentation/controllers/slot.controller';
import { SlotService } from './internal/business/services/slot.service';
import { SlotRepo } from './internal/data/repos/slot.repo';
import { DoctorAvailabilityApi } from './shared/api/doctor-availability.api';

@Module({
  controllers: [SlotController],
  providers: [SlotService, SlotRepo, DoctorAvailabilityApi],
  exports: [DoctorAvailabilityApi],
})
export class DoctorAvailabilityModule {}
