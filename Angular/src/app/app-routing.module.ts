import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlltasksComponent } from './components/alltasks/alltasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { OverdueTasksComponent } from "./components/overdue-tasks/overdue-tasks.component";

const routes: Routes = [
  { path: 'all', component: AlltasksComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'add', component: AddTaskComponent },
  { path: 'overdue', component: OverdueTasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
