import { Module } from '@nestjs/common';
import { SlotController } from './presentation/controllers/slot.controller';
import { SlotService } from './business/services/slot.service';
import { SlotRepo } from './data/repos/slot.repo';

@Module({
  controllers: [SlotController],
  providers: [SlotService, SlotRepo],
})
export class DoctorAvailabilityModule {}
