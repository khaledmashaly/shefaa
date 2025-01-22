import { randomUUID, UUID } from 'node:crypto';
import { AppointmentStatus } from './appointment-status';
import { AppointmentStatusAlreadyUpdatedException } from '../exceptions/appointment-status-already-updated.exception';

export class Appointment {
  private constructor(
    public readonly id: UUID,
    public readonly slotId: UUID,
    public readonly slotTime: Date,
    public readonly patientId: UUID,
    public readonly patientName: string,
    public readonly reservedAt: Date,
    private _status: AppointmentStatus,
  ) {}

  static create({
    id,
    slotId,
    slotTime,
    patientId,
    patientName,
    reservedAt,
    status,
  }: CreateParams): Appointment {
    return new Appointment(
      id,
      slotId,
      slotTime,
      patientId,
      patientName,
      reservedAt,
      status,
    );
  }

  static new({
    slotId,
    slotTime,
    patientId,
    patientName,
  }: NewParams): Appointment {
    return Appointment.create({
      id: randomUUID(),
      slotId,
      slotTime,
      patientId,
      patientName,
      reservedAt: new Date(),
      status: AppointmentStatus.CREATED,
    });
  }

  cancel(): void {
    if (this._status !== AppointmentStatus.CREATED) {
      throw new AppointmentStatusAlreadyUpdatedException();
    }

    this._status = AppointmentStatus.CANCELLED;
  }

  complete(): void {
    if (this._status !== AppointmentStatus.CREATED) {
      throw new AppointmentStatusAlreadyUpdatedException();
    }

    this._status = AppointmentStatus.COMPLETED;
  }

  get status(): AppointmentStatus {
    return this._status;
  }
}

type CreateParams = {
  id: UUID;
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
  reservedAt: Date;
  status: AppointmentStatus;
};

type NewParams = {
  slotId: UUID;
  slotTime: Date;
  patientId: UUID;
  patientName: string;
};
