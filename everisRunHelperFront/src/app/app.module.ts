import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { TaskStatusComponent } from './components/tasks/task-status/task-status.component';
import { CreateJiraFromAsiJiraComponent } from './components/tasks/create-jira-from-asi-jira/create-jira-from-asi-jira.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

import { ErhaRestServices } from './services/everis-run-helper-api-rest.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    TaskStatusComponent,
    CreateJiraFromAsiJiraComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule
    ],
  exports: [
  ],
  providers: [ErhaRestServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
