import { TestBed } from '@angular/core/testing';

import { ConsultarApartamentoService } from './consultar-apartamento.service';

describe('ConsultarApartamentoService', () => {
  let service: ConsultarApartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarApartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
