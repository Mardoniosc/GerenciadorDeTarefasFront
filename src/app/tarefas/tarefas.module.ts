import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import {
  TarefaComponent,
  GerenciadorComponent,
  TarefaDetalhesComponent
} from './components';
import { RouterModule } from '@angular/router'
import { TarefaService } from './services'

@NgModule({
  declarations: [
    TarefaComponent,
    GerenciadorComponent,
    TarefaDetalhesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
