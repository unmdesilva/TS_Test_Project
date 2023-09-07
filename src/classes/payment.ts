import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.recipient} is owed  Rs. ${this.amount} for ${this.details}`;
  }
}
