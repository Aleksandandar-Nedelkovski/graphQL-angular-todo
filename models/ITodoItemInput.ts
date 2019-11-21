import { ITodoItem } from "./ITodoItem";

export interface ITodoItemInput extends ITodoItem {
  CreationDate?: Date;
}