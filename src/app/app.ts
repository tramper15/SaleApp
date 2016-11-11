module app {
    var main = angular.module('characterManagement', ['ngRoute']);


    main.config (routeConfig);

    var baseUrl : string = '/Sales%20App/SaleApp/src';
    var viewFolderUrl : string = '/views/app';

   routeConfig.$inject = ['$routeProvider'];
   function routeConfig($routeProvider: ng.route.IRouteProvider) : void {
       $routeProvider.when('/characterList', {
           templateUrl: baseUrl + viewFolderUrl + '/home.html'
        //    controller: 'characterList as cl'
       })
      .when('/contact', {
           templateUrl: baseUrl + viewFolderUrl +'/contact.html'
        //    controller: 'characterList as cl'
       })
      .when('/about', {
           templateUrl: baseUrl + viewFolderUrl + '/about.html'
        //    controller: 'characterList as cl'
       }).otherwise('/characterList');
   }
}