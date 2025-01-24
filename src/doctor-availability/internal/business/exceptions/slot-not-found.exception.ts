export class SlotNotFoundException extends Error {
  constructor() {
    super('Slot not found');
    this.name = SlotNotFoundException.name;
  }
}
