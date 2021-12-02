import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultarApartamentoService {

  constructor(private http: HttpClient) { }

  /*getApartamentos(){
    this.http.get("http://localhost:3000/consultarApartamento?tipo=apartamento").subscribe(data=>{
      console.log("Llega");
    });
  }*/
  getApartamentos(){
    console.log("Realizar consulta a backend");
    return this.http.get("http://localhost:3000/consultarApartamento?tipo=Casa");
  }
}
