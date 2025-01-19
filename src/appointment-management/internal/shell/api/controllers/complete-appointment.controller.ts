import { Controller, Param, Post } from '@nestjs/common';
import { UUID } from 'node:crypto';
import { CompleteAppointmentCommandHandler } from '../../../core/commands/complete-appointment/complete-appointment.command-handler';

@Controller()
export class CompleteAppointmentController {
  constructor(private readonly handler: CompleteAppointmentCommandHandler) {}

  @Post('/appointment/:id/complete')
  completeAppointment(@Param('id') id: UUID): void {
    this.handler.execute({
      appointmentId: id,
    });
  }
}
