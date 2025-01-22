import { CancelAppointmentCommandHandler } from './cancel-appointment/cancel-appointment.command-handler';
import { CompleteAppointmentCommandHandler } from './complete-appointment/complete-appointment.command-handler';

export const appointmentManagementCommandHandlers = [
  CancelAppointmentCommandHandler,
  CompleteAppointmentCommandHandler,
];
