import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly PATH = '/tarefas'

  constructor(private http: HttpClient) { }

  tarefa(id: number): Observable<any> {
    return this.http.get(`${env.baseURL}${this.PATH}/${id}`);
  }

  deleteTarefa(id: number): Observable<any> {
    return this.http.delete(`${env.baseURL}${this.PATH}/${id}`);
  }

  listarTarefas(): Observable<any> {
    return this.http.get(env.baseURL + this.PATH);
  }

  inserir(tarefa: Tarefa): Observable<any> {
    return this.http.post(env.baseURL + this.PATH, tarefa);
  }

  atualizar(tarefa: Tarefa): Observable<any> {
    return this.http.put(`${env.baseURL}${this.PATH}/${tarefa.id}`, tarefa)
  }

}
