import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ItaskStatus } from '../entities/ITaskStatus';
import { ITaskProcess } from '../entities/ITaskProcess';

//const endpoint = 'http://10.217.88.164:4780/v1/';
const endpoint = 'http://localhost:4780/v1/';

@Injectable({
  providedIn: 'root'
})
export class ErhaRestServices {

  constructor(private http: HttpClient) {  }

  public getTaskStatus(id: string) {
    let req: string = endpoint + 'checkTask/' + id;
    return this.http.get<ItaskStatus>(req);
  }
  
  public createJiraFromAsiJira(asiJira: string){
    let req: string = endpoint + 'asijiratojiraconverter/' + asiJira;
    return this.http.post<ITaskProcess>(req, '');
  }

  public getInformeBacklogDiario() {
    let req: string = endpoint + 'informeBacklogDiario';
    return this.http.get<ITaskProcess>(req);
  }


}

