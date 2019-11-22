import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { OverdueTodoItemQuery } from 'src/app/types/TodoItemQuery';
import gql from 'graphql-tag';
import { ITodoItem } from '../../../../../models/ITodoItem';
import { SubscriptionBase } from 'src/app/types/SubscriptionBase';

@Component({
  selector: 'atp-overdue-tasks',
  templateUrl: './overdue-tasks.component.html',
  styleUrls: ['./overdue-tasks.component.scss']
})
export class OverdueTasksComponent extends SubscriptionBase implements OnInit {
  constructor(apollo: Apollo) {
    super(apollo);
  }

  ngOnInit() {
    this.Subscribe<OverdueTodoItemQuery>(gql`query ItemsQuery {
      OverdueTodoItems {
      Id,
      Title,
      Description,
      DaysCreated,
      DueDate,
      Completed
    }
  }`).subscribe(todo => {
      this.todos = new Array<ITodoItem>();
      todo.data.OverdueTodoItems.forEach(x => {
        this.todos.push(x);
      });
    })
  }
}