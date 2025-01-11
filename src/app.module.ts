import { Module } from '@nestjs/common';
import { SlotModule } from './slot/slot.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [SlotModule, AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
