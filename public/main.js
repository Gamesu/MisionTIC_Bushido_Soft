var ngApp = angular.module('myApp', []);
  
 ngApp.controller('myController', function ($scope, $http) {

    //$scope.msg = '¡Hola, angular como estan! ';

    $scope.getData = function () {
                   return 'qubernet';
                }
                $scope.createTodo = function () {
                    $http
                    .post("http://localhost:600/upload", $scope.formData)
                    .then(function successCallback(response)  {
                     // $scope.formData = {};
                      $scope.todos = response.data;
                      console.log(response);
                    })
                  };
                  $scope.createUbicacion = function () {
                    $http
                    .post("http://localhost:600/crearUbicacion", $scope.formData)
                    .then(function successCallback(response)  {
                     // $scope.formData = {};
                      $scope.todos = response.data;
                      console.log(response);
                    })
                  };
                  $scope.createInmueble = function () {
                    $http
                    .post("http://localhost:600/crearInmueble", $scope.formData)
                    .then(function successCallback(response)  {
                     // $scope.formData = {};
                      $scope.todos = response.data;
                      console.log(response);
                    })
                  };
 })


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
        }*/