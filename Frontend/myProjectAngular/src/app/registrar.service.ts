import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }


  createTodo(formData: any){
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });/*
    this.http.get("http://localhost:3000/prueba",{headers:headers}).subscribe (data =>{
      console.log(data);
    }) ;*/
    console.log("Realizar post de creacion de ubicacion en backend");
    console.log(formData);
    //return this.http.post("http://localhost:3000/ubicacion",data);
    //return;
    /*http.post("http://localhost:3000/ubicacion", $scope.formData)
    .then(function successCallback(response){
        // $scope.formData = {};
        $scope.todos = response.data;
        console.log(response);
        });*/
        //   alert($scope.tel+" "+$scope.cedula)
  }
}
