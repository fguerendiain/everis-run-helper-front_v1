//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule} from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
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
  MatTableModule,
  MatGridListModule,
  MatDividerModule
} from '@angular/material';


//COMPONENT
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { TaskStatusComponent } from './components/tasks/task-status/task-status.component';
import { CreateJiraFromAsiJiraComponent } from './components/tasks/createJiraFromAsiJira/create-jira-from-asi-jira/create-jira-from-asi-jira.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InformeDiarioComponent } from './components/tasks/backlog/informe-diario/informe-diario.component';
import { InformeMensualComponent } from './components/tasks/backlog/informe-mensual/informe-mensual.component';
import { LoadingBarComponent } from './components/utils/loading-bar/loading-bar.component';
import { BacklogPriorizadoComponent } from './components/tasks/backlog/graph/informeDiario/backlog-priorizado/backlog-priorizado.component';
import { CreadasVsResueltasComponent } from './components/tasks/backlog/graph/informeDiario/creadas-vs-resueltas/creadas-vs-resueltas.component';
import { PriorizacionComponent } from './components/tasks/backlog/graph/informeDiario/priorizacion/priorizacion.component';
import { ReabiertosComponent } from './components/tasks/backlog/graph/informeDiario/reabiertos/reabiertos.component';
import { DistribucionComponent } from './components/tasks/backlog/graph/informeDiario/distribucion/distribucion.component';
import { ResumenComponent } from './components/tasks/backlog/graph/informeDiario/resumen/resumen.component';
import { ListadoPriorizadosComponent } from './components/tasks/backlog/graph/informeDiario/listado-priorizados/listado-priorizados.component';
import { GraphGridLayoutComponent } from './components/tasks/backlog/graph/informeDiario/graph-grid-layout/graph-grid-layout.component';
import { ProcessResponseComponent } from './components/tasks/createJiraFromAsiJira/process-response/process-response.component';

//SERVICE
import { ErhaRestServices } from './services/everis-run-helper-api-rest.service';
import { DatePipe } from '@angular/common'


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
    LoadingBarComponent,
    BacklogPriorizadoComponent,
    CreadasVsResueltasComponent,
    PriorizacionComponent,
    ReabiertosComponent,
    DistribucionComponent,
    ResumenComponent,
    ListadoPriorizadosComponent,
    GraphGridLayoutComponent,
    ProcessResponseComponent
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
    ChartsModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
  ],
  providers: [ErhaRestServices,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
