import { Injectable } from '@nestjs/common';
import { MessageQueue, PublishParams, SubscribeParams } from './message-queue';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class InMemoryMessageQueue implements MessageQueue {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  publish<P>({ topic, payload }: PublishParams<P>): void {
    this.eventEmitter.emit(topic, payload);
  }

  subscribe<P>({ topic, callback }: SubscribeParams<P>): void {
    this.eventEmitter.on(topic, callback);
  }
}
