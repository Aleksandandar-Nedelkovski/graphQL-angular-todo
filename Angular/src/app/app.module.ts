import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule,
  MatInputModule, MatCardModule, MatNativeDateModule, MatDatepickerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AlltasksComponent } from './components/alltasks/alltasks.component';
import { OverdueTasksComponent } from './components/overdue-tasks/overdue-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AlltasksComponent,
    OverdueTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
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
