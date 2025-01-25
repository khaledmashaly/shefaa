import { CancelAppointmentCommandHandler } from './cancel-appointment/cancel-appointment.command-handler';
import { CompleteAppointmentCommandHandler } from './complete-appointment/complete-appointment.command-handler';
import { CreateAppointmentCommandHandler } from './create-appointment/create-appointment.command-handler';

export const appointmentManagementCommandHandlers = [
  CancelAppointmentCommandHandler,
  CompleteAppointmentCommandHandler,
  CreateAppointmentCommandHandler,
];
