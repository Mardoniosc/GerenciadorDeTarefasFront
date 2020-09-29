import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TarefaComponent,
  GerenciadorComponent,
  TarefaDetalhesComponent
} from './components';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    TarefaComponent,
    GerenciadorComponent,
    TarefaDetalhesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TarefasModule { }
