import { Field, InputType } from "type-graphql";
import { TodoItem } from "./TodoItem";

// Partial lets us tie our new mutation class back to our old class without having to supply every property.
@InputType()
export class TodoItemInput implements Partial<TodoItem> {
  @Field()
  Id: string;
  @Field({ description: "The item title" })
  Title: string = "";
  @Field({ nullable: true, description: "The item description" })
  Description?: string = "";
  @Field({ nullable: true, description: "The item due date" })
  DueDate?: Date;
  @Field()
  CreationDate: Date;
  @Field()
  Completed: boolean = false;
}