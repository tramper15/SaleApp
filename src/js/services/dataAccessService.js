var characterApp;
(function (characterApp) {
    var services;
    (function (services) {
        function DataAccessService($resource) {
            var characterResource = $resource('/Sales%20App/SaleApp/src/app/JSON/TestCharacterData.json');
            return {
                getCharacterResource: function () {
                    return characterResource.get().$promise;
                }
            };
        }
        DataAccessService.$inject = ['$resource'];
        angular.module('characterManagement').factory('dataAccessService', DataAccessService);
    })(services = characterApp.services || (characterApp.services = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=dataAccessService.js.map
