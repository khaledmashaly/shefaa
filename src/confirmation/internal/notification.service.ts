import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NotificationService {
  @OnEvent('appointment.created')
  onAppointmentCreated(payload: unknown): void {
    console.log('Appointment created', payload);
  }
}
