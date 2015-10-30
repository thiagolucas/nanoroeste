angular.module('myApp', []).controller('ListaController', function($scope) {

          $scope.lojas = [
              {id:1, atividade:'Entretenimento', nome:'Y Designs Retro', bairro:'Pindorama', link: 'entretenimento/y/'},
              {id:2, atividade:'Cosméticos',nome:'Hinode', bairro:'Pindorama', link: '#'},
              {id:3, atividade:'Moda',nome:'Calçados, Roupas, Acessórios', bairro:'Pindorama', link: '#'},
              {id:4, atividade:'Utilidades',nome:'Importados', bairro:'Glória', link: '#'},
              {id:5, atividade:'Alimentação',nome:'Restaurante', bairro:'Glória', link: '#'},
              {id:6, atividade:'Saúde',nome:'Clínica', bairro:'Glória', link: '#'},
              {id:7, atividade:'Escolas',nome:'Particular', bairro:'Ipanema', link: '#'},
              {id:8, atividade:'Igrejas',nome:'Ministério', bairro:'Ipanema', link: '#'},
              {id:9, atividade:'Casa e Decoração',nome:'Lar', bairro:'Ipanema', link: '#'},
              {id:10, atividade:'Construção',nome:'Depósito', bairro:'Coqueiros', link: '#'},
              {id:11, atividade:'Vaículos',nome:'Concessionária', bairro:'Coqueiros', link: '#'},
              {id:12, atividade:'Prestação de Serviços',nome:'Autônomo', bairro:'Coqueiros', link: '#'}
          ];



      });