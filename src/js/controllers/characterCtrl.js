var characterApp;
(function (characterApp) {
    var controllers;
    (function (controllers) {
        var CharacterListCtrl = (function () {
            function CharacterListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Character List';
                var characterResource = dataAccessService.getCharacterResource();
                characterResource.query(function (data) {
                    _this.characterList = data;
                });
            }
            return CharacterListCtrl;
        }());
        angular.module('characterManagement').controller('CharacterListCtrl', CharacterListCtrl);
    })(controllers = characterApp.controllers || (characterApp.controllers = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=characterCtrl.js.map
