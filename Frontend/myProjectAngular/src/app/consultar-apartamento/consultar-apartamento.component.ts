import { Component, OnInit } from '@angular/core';
import { ConsultarApartamentoService } from '../consultar-apartamento.service';

@Component({
  selector: 'app-consultar-apartamento',
  templateUrl: './consultar-apartamento.component.html',
  styleUrls: ['./consultar-apartamento.component.css']
})
export class ConsultarApartamentoComponent implements OnInit {

  constructor(private servicio: ConsultarApartamentoService) { }
  nombre:any;
  tipo:any;
  Apartamentos:any;
  ngOnInit(): void {
    console.log("Carga pagina de consulta de apartamento");
    this.nombre = "Daniel";
    this.tipo = "Ingeniero";
    this.servicio.getApartamentos().subscribe(data=>{
      this.Apartamentos = data;
    });//Ejecucion al cargar la pagina*/
  }
  // Llamado al servicio para luego hacer la consulta en el backend
  /*getApartamentos(){
    this.servicio.getApartamentos();
  }*/
}
