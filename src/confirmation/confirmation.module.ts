import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { NotificationService } from './internal/notification.service';

@Module({
  imports: [SharedModule],
  providers: [NotificationService],
})
export class ConfirmationModule {}
