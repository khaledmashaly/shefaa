import { UUID } from 'node:crypto';

export class AppointmentEntity {
  constructor(
    public readonly id: UUID,
    public readonly slotId: UUID,
    public readonly slotTime: Date,
    public readonly patientId: UUID,
    public readonly patientName: string,
    public readonly reservedAt: Date,
    public readonly status: 'CREATED' | 'CANCELLED' | 'COMPLETED',
  ) {}
}
