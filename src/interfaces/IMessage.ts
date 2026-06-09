import { TypeMessages } from "../enums/TypeMessages";

export interface IMessage {
  id: number;
  type: TypeMessages;
  message: string;
}