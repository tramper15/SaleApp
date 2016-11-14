var characterApp;
(function (characterApp) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getCharacterResource = function () {
                return this.$resource('/api/characters/:productId');
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular.module('common.services').service('dataAccessService', DataAccessService);
    })(common = characterApp.common || (characterApp.common = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=dataAccessService.js.map
