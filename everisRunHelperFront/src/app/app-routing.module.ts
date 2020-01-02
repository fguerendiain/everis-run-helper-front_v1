import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { CreateJiraFromAsiJiraComponent } from './components/tasks/create-jira-from-asi-jira/create-jira-from-asi-jira.component';
import { TaskStatusComponent } from './components/tasks/task-status/task-status.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'crateJiraFromAsiJira', component: CreateJiraFromAsiJiraComponent},
  {path: 'taskStatus', component: TaskStatusComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
