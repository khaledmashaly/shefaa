import { CancelAppointmentController } from './cancel-appointment.controller';
import { CompleteAppointmentController } from './complete-appointment.controller';
import { ListUpcomingAppointmentsController } from './list-upcoming-appointments.controller';

export const appointmentManagementControllers = [
  ListUpcomingAppointmentsController,
  CancelAppointmentController,
  CompleteAppointmentController,
];
