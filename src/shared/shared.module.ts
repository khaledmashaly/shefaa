import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageQueue } from './infrastructure/message-queue';
import { InMemoryMessageQueue } from './infrastructure/in-memory-message-queue';

const messageQueueProvider = {
  provide: MessageQueue,
  useClass: InMemoryMessageQueue,
};

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [messageQueueProvider],
  exports: [messageQueueProvider],
})
export class ShareModule {}
