import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarApartamentoComponent } from './consultar-apartamento.component';

describe('ConsultarApartamentoComponent', () => {
  let component: ConsultarApartamentoComponent;
  let fixture: ComponentFixture<ConsultarApartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarApartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
