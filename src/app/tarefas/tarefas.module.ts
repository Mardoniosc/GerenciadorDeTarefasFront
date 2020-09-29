import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
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
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
