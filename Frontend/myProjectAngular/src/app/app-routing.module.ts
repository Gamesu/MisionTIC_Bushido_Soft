import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUbicacionComponent } from './add-ubicacion/add-ubicacion.component';
import { ConsultarApartamentoComponent } from './consultar-apartamento/consultar-apartamento.component';

const routes: Routes = [
  { path: 'crearUbicacion', component: AddUbicacionComponent },
  { path: 'consultarApartamento', component: ConsultarApartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
