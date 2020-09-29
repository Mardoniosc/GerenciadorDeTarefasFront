import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Tarefa } from '../../model';
import { TarefaService } from '../../services';

@Component({
  selector: 'app-tarefa-detalhes',
  templateUrl: './tarefa-detalhes.component.html',
  styleUrls: ['./tarefa-detalhes.component.css']
})
export class TarefaDetalhesComponent implements OnInit {


  tarefas: Tarefa[];
  tarefa = {} as Tarefa;

  form: FormGroup

  idTarefa: string;


  constructor(
    private tarefaService: TarefaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.gerarForm()
    this.idTarefa = this.route.snapshot.paramMap.get('id_tarefa');
    this.carregaTarefas()
    this.carregarTarefa(Number(this.idTarefa));
  }

  gerarForm(){
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', []]
    })
  }

  carregaTarefas() {
    this.tarefaService.listarTarefas()
      .subscribe(
        data => {
          this.tarefas = data;
        },
        err => console.log(err)
      )
  }

  carregarTarefa(id: number){
    this.tarefaService.tarefa(id)
      .subscribe(
        data => {
          this.tarefa = data;
          this.populandoFormulario();
        },
        err => console.error(err)
      )
  }

  atualizar(){
    this.tarefa.dataAtualizacao = new Date();
    this.tarefa.titulo = this.form.get('titulo').value;
    this.tarefa.descricao = this.form.get('descricao').value;

    this.tarefaService.atualizar(this.tarefa)
    .subscribe(
      data => {
        this.carregaTarefas();
        this.router.navigate(['/tarefas']);
      },
      err => console.error(err)
    )

  }

  editar(id: number){
    console.log(id);
  }

  finalizar(id: number){
    this.tarefaService.tarefa(id)
      .subscribe(
        data => {
          this.tarefa = data;
          this.tarefa.status = 0;
          this.tarefa.conclusao = new Date();
          this.atualizarFinalizar(this.tarefa);
        },
        err => console.error(err)
      )
  }

  excluir(id: number){
    this.tarefaService.tarefa(id)
      .subscribe(
        data => {
          this.tarefa = data;
          this.tarefa.statusRemocao = 1;
          this.tarefa.remocao = new Date();
          this.atualizarExcluir(this.tarefa);
        },
        err => console.error(err)
      )
  }

  atualizarFinalizar(tarefa: Tarefa) {
    this.tarefaService.atualizar(tarefa)
      .subscribe(
        data => {
          this.carregaTarefas();
        },
        err => console.error(err)
      )
  }

  atualizarExcluir(tarefa: Tarefa) {
    this.tarefaService.atualizar(tarefa)
      .subscribe(
        data => {
          this.carregaTarefas();
        },
        err => console.error(err)
      )
  }

  populandoFormulario(){
    this.form.patchValue({
      titulo: this.tarefa.titulo,
      descricao: this.tarefa.descricao,
    });
  }

}
