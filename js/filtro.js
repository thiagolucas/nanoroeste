angular.module('myApp', []).controller('ListaController', function($scope) {

          $scope.lojas = [
              {id:1, atividade:'Entretenimento', nome:'Y Designs Retro', bairro:'Pindorama', link: 'entretenimento/y/'},
              {id:2, atividade:'Cosméticos',nome:'Loide Hinode', bairro:'Pindorama', link: 'cosmeticos/loide/'},
              {id:3, atividade:'Igreja',nome:'IPREV', bairro:'Pindorama', link: 'igrejas/iprev/'},
              {id:3, atividade:'Serviço',nome:'Ludyana - Manicure/Pedicure', bairro:'Coqueiros', link: 'servicos/ludyana/'}
          ];

      });
