var app;
(function (app) {
    var main = angular.module('characterManagement', ['ngRoute']);
    main.config(routeConfig);
    var baseUrl = '/Sales%20App/SaleApp/src';
    var viewFolderUrl = '/views/app';
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider.when('/characterList', {
            templateUrl: baseUrl + viewFolderUrl + '/home.html'
        })
            .when('/contact', {
            templateUrl: baseUrl + viewFolderUrl + '/contact.html'
        })
            .when('/about', {
            templateUrl: baseUrl + viewFolderUrl + '/about.html'
        }).otherwise('/characterList');
    }
})(app || (app = {}));

//# sourceMappingURL=app.js.map
