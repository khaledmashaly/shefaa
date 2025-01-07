# Shefaa

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# System Design

## Entities

### Slot
- id: uuid
- time: date
- doctorId: uuid
- doctorName: string
- isReserved: boolean
- cost: number

### Appointment
- id: uuid
- slotId: uuid (one-to-one)
- patientId: Guid
- patientName: string
- reservedAt: Date
- status: CREATED | COMPLETED | CANCELLED

## Operations

### Slots

#### List Slots for doctors

`GET /slots`

- query
    - isReserved: boolean
    - doctorId: uuid

#### Add new Slot

`POST /slots`

- body
    - time: date
    - doctorId: uuid
    - doctorName: string
    - cost: number

### Appointment

#### List Appointments

`GET /appointments`

#### Add new Appointment

`POST /appointments`

- body
    - slotId: uuid
    - patientId: uuid
    - patientName: string

#### Update Appointment status

`PUT /appointments/${appointmentId}/status`

- body
    - status: COMPLETED | CANCELLED
