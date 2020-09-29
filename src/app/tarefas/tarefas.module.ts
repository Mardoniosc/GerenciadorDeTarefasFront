import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaComponent, GerenciadorComponent } from './components';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [TarefaComponent, GerenciadorComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TarefasModule { }
