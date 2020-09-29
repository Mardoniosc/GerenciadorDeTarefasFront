import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from '../../model'

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas: Tarefa[];
  tarefa = {} as Tarefa;

  form: FormGroup

  constructor(
    private tarefaService: TarefaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.gerarForm()
    this.carregaTarefas()
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

  cadastrar(){
    if(this.form.invalid){
      return;
    }
    this.tarefa = this.form.value;
    const dataAtual = new Date();
    this.tarefa.dataCriacao = dataAtual;
    this.tarefa.dataAtualizacao = dataAtual;
    this.tarefa.status = 1;
    this.tarefa.statusRemocao = 0;

    this.tarefaService.inserir(this.tarefa)
      .subscribe(
        data => {
          this.carregaTarefas();
          this.gerarForm();
        },
        err => console.error(err)
      )
  }

  editar(id: number){
    this.router.navigate(['/tarefas/detalhes/' + id])
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
}
