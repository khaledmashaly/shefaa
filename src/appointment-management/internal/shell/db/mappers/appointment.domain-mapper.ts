import { Injectable } from '@nestjs/common';
import { Appointment } from '../../../core/models/appointment';
import { AppointmentStatus } from '../../../core/models/appointment-status';
import { AppointmentEntity } from '../entities/appointment.entity';

@Injectable()
export class AppointmentDomainMapper {
  toDomain(entity: AppointmentEntity): Appointment {
    return Appointment.create({
      id: entity.id,
      slotId: entity.slotId,
      slotTime: entity.slotTime,
      patientId: entity.patientId,
      patientName: entity.patientName,
      reservedAt: entity.reservedAt,
      status: AppointmentStatus[entity.status],
    });
  }

  toEntity(domain: Appointment): AppointmentEntity {
    return new AppointmentEntity(
      domain.id,
      domain.slotId,
      domain.slotTime,
      domain.patientId,
      domain.patientName,
      domain.reservedAt,
      domain.status,
    );
  }
}
