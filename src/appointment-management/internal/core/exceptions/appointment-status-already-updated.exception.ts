export class AppointmentStatusAlreadyUpdatedException extends Error {
  constructor() {
    super('Appointment status already updated');
    this.name = AppointmentStatusAlreadyUpdatedException.name;
  }
}
