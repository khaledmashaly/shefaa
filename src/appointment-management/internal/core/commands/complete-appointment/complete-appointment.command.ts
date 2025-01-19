import { UUID } from 'node:crypto';

export type CompleteAppointmentCommand = {
  appointmentId: UUID;
};
