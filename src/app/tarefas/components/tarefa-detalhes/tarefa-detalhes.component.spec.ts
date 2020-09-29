import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDetalhesComponent } from './tarefa-detalhes.component';

describe('TarefaDetalhesComponent', () => {
  let component: TarefaDetalhesComponent;
  let fixture: ComponentFixture<TarefaDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
