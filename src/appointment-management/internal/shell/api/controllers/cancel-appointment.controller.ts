import { Controller, Param, Post } from '@nestjs/common';
import { CancelAppointmentCommandHandler } from '../../../core/commands/cancel-appointment/cancel-appointment.command-handler';
import { UUID } from 'node:crypto';

@Controller()
export class CancelAppointmentController {
  constructor(private readonly handler: CancelAppointmentCommandHandler) {}

  @Post('/appointment/:id/cancel')
  cancelAppointment(@Param('id') id: UUID): void {
    this.handler.execute({
      appointmentId: id,
    });
  }
}
