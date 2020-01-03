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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatTableModule
} from '@angular/material';

import { ErhaRestServices } from './services/everis-run-helper-api-rest.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InformeDiarioComponent } from './components/tasks/backlog/informe-diario/informe-diario.component';
import { InformeMensualComponent } from './components/tasks/backlog/informe-mensual/informe-mensual.component';
import { LoadingBarComponent } from './components/utils/loading-bar/loading-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page404Component,
    TaskStatusComponent,
    CreateJiraFromAsiJiraComponent,
    ToolbarComponent,
    InformeDiarioComponent,
    InformeMensualComponent,
    LoadingBarComponent
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
    MatMenuModule,
    MatOptionModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTableModule,
    ChartsModule
  ],
  exports: [
  ],
  providers: [ErhaRestServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
