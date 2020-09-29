import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly PATH = '/tarefas'

  constructor(private http: HttpClient) { }

  listarTarefas(): Observable<any> {
    return this.http.get(env.baseURL + this.PATH);
  }

}
