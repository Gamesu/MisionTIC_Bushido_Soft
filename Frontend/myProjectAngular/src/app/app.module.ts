import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { AddUbicacionComponent } from './add-ubicacion/add-ubicacion.component';
import { ConsultarApartamentoComponent } from './consultar-apartamento/consultar-apartamento.component';
//import { ConsultarApartamentoService } from './consultar-apartamento.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUbicacionComponent,
    ConsultarApartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
