import { Body, Controller, Post } from '@nestjs/common';
import { BookAppointmentDto } from '../dtos/book-appointment.dto';
import { BookAppointmentCommandHandler } from '../../application/commands/book-appointment.command-handler';
import { BookAppointmentResponse } from '../../application/commands/book-appointment.response';

@Controller()
export class BookAppointmentController {
  constructor(private readonly handler: BookAppointmentCommandHandler) {}

  @Post('appointment')
  bookAppointment(
    @Body() bookAppointmentDto: BookAppointmentDto,
  ): BookAppointmentResponse {
    return this.handler.execute(bookAppointmentDto);
  }
}
