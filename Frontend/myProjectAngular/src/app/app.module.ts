//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Components
import { AddUbicacionComponent } from './add-ubicacion/add-ubicacion.component';
import { ConsultarApartamentoComponent } from './consultar-apartamento/consultar-apartamento.component';

//Services
import { RegistrarService } from './registrar.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUbicacionComponent,
    ConsultarApartamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    //HttpModule
  ],
  providers: [RegistrarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
