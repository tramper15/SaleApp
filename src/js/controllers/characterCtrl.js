var characterApp;
(function (characterApp) {
    var controllers;
    (function (controllers) {
        var CharacterListCtrl = (function () {
            function CharacterListCtrl() {
                this.title = 'Character List';
                this.characterList = new Array();
                this.characterList.push(new characterApp.models.Character('Toni', 'Bennet'));
                this.characterList.push(new characterApp.models.Character('Katie', 'Bennet'));
            }
            return CharacterListCtrl;
        }());
        angular.module('characterManagement').controller('CharacterListCtrl', CharacterListCtrl);
    })(controllers = characterApp.controllers || (characterApp.controllers = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=characterCtrl.js.map
