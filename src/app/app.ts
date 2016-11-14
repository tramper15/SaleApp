module characterApp {
    var main = angular.module('characterManagement', ['ngRoute', 'common.services', 'characterResourceMock']);

    main.config (routeConfig);

    var baseUrl : string = '/Sales%20App/SaleApp/src';
    var viewFolderUrl : string = '/views/app';

   routeConfig.$inject = ['$routeProvider'];
   function routeConfig($routeProvider: ng.route.IRouteProvider) : void {
       $routeProvider.when('/characterList', {
           templateUrl: baseUrl + viewFolderUrl + '/home.html',
           controller: 'CharacterListCtrl as vm'
       })
      .when('/contact', {
           templateUrl: baseUrl + viewFolderUrl + '/contact.html'
        })
      .when('/about', {
           templateUrl: baseUrl + viewFolderUrl + '/about.html'
       }).otherwise('/characterList');
   }
}