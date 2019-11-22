import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlltasksComponent } from './components/alltasks/alltasks.component';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatInputModule, MatDatepickerModule, MatCardTitle, MatCardContent, MatCardActions
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { OverdueTasksComponent } from './components/overdue-tasks/overdue-tasks.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AlltasksComponent,
    OverdueTasksComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    // MatCardTitle,
    // MatCardContent,
    // MatCardActions,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(httpLink: HttpLink, apollo: Apollo) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000' }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          // To get the data on each get, set the fetchPolicy
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
