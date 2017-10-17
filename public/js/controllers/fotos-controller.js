angular.module('alurapic').controller('FotosController', function($scope) {
  //o $scope serve para o controller disponibilizar dados para a view
  $scope.foto = {
    titulo: 'leão',
    url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
  }
});