var characterApp;
(function (characterApp) {
    var controllers;
    (function (controllers) {
        var CharacterListCtrl = (function () {
            function CharacterListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Character List';
                var promise = dataAccessService.getCharacterResource();
                promise.then(function (result) {
                    _this.characterList = result.data;
                });
            }
            return CharacterListCtrl;
        }());
        angular.module('characterManagement')
            .component('appCharacterList', {
            controller: CharacterListCtrl,
            controllerAs: 'vm',
            bindings: {
                firstName: '<',
                lastName: '<',
                characterId: '<'
            },
            templateUrl: '/Sales%20App/SaleApp/src/views/app/home.html'
        })
            .controller('CharacterListCtrl', CharacterListCtrl);
    })(controllers = characterApp.controllers || (characterApp.controllers = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=characterCtrl.js.map
