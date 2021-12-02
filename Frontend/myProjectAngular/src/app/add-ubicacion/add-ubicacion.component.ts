import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ubicacion',
  templateUrl: './add-ubicacion.component.html',
  styleUrls: ['./add-ubicacion.component.css']
})
export class AddUbicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*
var ngApp = angular.module('myApp', []);

ngApp.controller('myController', function ($scope, $http) {
    $scope.msg = '¡Hola, angular como estan! ';
    $scope.getData = function () {
                   return 'qubernet';
                };
    $scope.createTodo = function () {
        $http
        .post("http://localhost:3000/ubicacion", $scope.formData)
        .then(function successCallback(response){
            // $scope.formData = {};
            $scope.todos = response.data;
            console.log(response);
            });
            //   alert($scope.tel+" "+$scope.cedula)
    };
    $scope.ListTodo = function () {
        $http
        .get("http://localhost:3000/ubicacion", $scope.formData)
        .then(function successCallback(response){
            // $scope.formData = {};
            $scope.Lista = response.data;
            console.log(response);
            });
            //   alert($scope.tel+" "+$scope.cedula)
    };
    $scope.sumar = function () {
        num1 = $scope.formData.num1;
        num1 = parseInt(num1, 10);
        num2 = $scope.formData.num2;
        num2 = parseInt(num2, 10);
        resultado= num1 + num2;
        $scope.resultado = resultado;
                
            //   alert($scope.tel+" "+$scope.cedula)
    };
    $scope.multi = function () {
        $http
        .post("http://localhost:3000/multi", $scope.formData)
        .then(function successCallback(response){
            // $scope.formData = {};
            $scope.resultado = response.data;
            console.log(response);
            });
                
            //   alert($scope.tel+" "+$scope.cedula)
    };
});*/


/*onload = function () {
    document.getElementById('lbtnTest').onclick = function () {
        alert("hola")
        // Obtenga la aplicación Angular a través del controlador
        var appElement = document.querySelector('[ng-controller=myController]');
        // Obtenga la variable $ scope
        var $scope = angular.element(appElement).scope();
        // Llama a la variable msg y cambia el valor de msg
        $scope.msg = '123456';
        // La línea anterior cambió el valor de msg. Si desea sincronizar con el controlador angular, debe llamar al método $ apply ().
        $scope.$apply();
        // Llame al método getData () en el controlador
        console.log($scope.getData());
    }
}
*/