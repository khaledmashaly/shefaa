import { UUID } from 'node:crypto';

export type CancelAppointmentCommand = {
  appointmentId: UUID;
};
