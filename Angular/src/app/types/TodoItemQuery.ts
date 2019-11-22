import { ITodoItem } from '../../../../models/ITodoItem';

export interface TodoItemQuery {
  TodoItems: ITodoItem[];
}

export interface OverdueTodoItemQuery {
  OverdueTodoItems: ITodoItem[];
}