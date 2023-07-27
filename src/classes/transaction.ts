import { v4 as uuid } from "uuid";

export type TypeTransaction = "income" | "outcome";

class Transaction {
  private _id: string;
  private _title: string;
  private _value: number;
  private _type: TypeTransaction;

  constructor(title: string, value: number, type: TypeTransaction) {
    this._id = uuid();
    this._title = title;
    this._value = value;
    this._type = type;
  }

  get id(): string {
    return this._id;
  }

  get type(): string {
    return this._type;
  }

  get value(): number {
    return this._value;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  set value(value: number) {
    this._value = value;
  }

  set type(type: TypeTransaction) {
    this._type = type;
  }

  set id(id: string) {
    this._id = id;
  }
}

export default Transaction;
