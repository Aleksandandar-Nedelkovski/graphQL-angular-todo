import { DataAccessBase } from "./DataAccessBase";
import { ITodoSchema, TodoModel } from "./Schema"

export class TodoDataAccess extends DataAccessBase<ITodoSchema> {
  constructor() {
    super(TodoModel);
  }
}