var app = angular.module('ModuloApp', []);

  app.controller('AlumnoController', function($scope) {
    $scope.nombre = 'edwar';
    //metodo comentario inicializado 
    $scope.nuevoComentario = {};
    $scope.comentarios = [
      {
        username:'uriel',
        comentario:'buen comentario'
      },
      {
        username:'paul',
        comentario:'maliciomo el tutorial'
      }
    ];
    //metodo para el controlador 
    $scope.agregarComentario = function(){
      $scope.comentarios.push($scope.nuevoComentario);
    }
  });
