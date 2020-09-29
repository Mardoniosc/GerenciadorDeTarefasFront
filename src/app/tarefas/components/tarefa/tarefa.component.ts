import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services';
import { Tarefa } from '../../model'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.carregaTarefa()
  }

  carregaTarefa() {
    this.tarefaService.listarTarefas()
      .subscribe(
        data => {
          this.tarefas = data;
          console.log(this.tarefas)
        },
        err => console.log(err)
      )
  }
}
