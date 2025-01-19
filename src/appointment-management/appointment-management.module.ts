import { Module } from '@nestjs/common';
import { appointmentManagementControllers } from './internal/shell/api/controllers';
import { appointmentManagementCommandHandlers } from './internal/core/commands';
import { appointmentManagementQueryHandlers } from './internal/core/queries';
import { appointmentManagementApiMappers } from './internal/shell/api/mappers';
import { appointmentManagementDomainMappers } from './internal/shell/db/mappers';
import { AppointmentRepo } from './internal/core/contracts/appointment.repo';
import { InMemoryAppointmentRepo } from './internal/shell/db/repos/in-memory-appointment.repo';

const appointmentManagementRepos = [
  {
    provide: AppointmentRepo,
    useClass: InMemoryAppointmentRepo,
  },
];

@Module({
  controllers: appointmentManagementControllers,
  providers: [
    ...appointmentManagementApiMappers,
    ...appointmentManagementCommandHandlers,
    ...appointmentManagementQueryHandlers,
    ...appointmentManagementDomainMappers,
    ...appointmentManagementRepos,
  ],
})
export class AppointmentManagementModule {}
