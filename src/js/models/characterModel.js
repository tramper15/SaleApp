var characterApp;
(function (characterApp) {
    var models;
    (function (models) {
        var Character = (function () {
            function Character(firstName, lastName //,
                ) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            return Character;
        }());
        models.Character = Character;
    })(models = characterApp.models || (characterApp.models = {}));
})(characterApp || (characterApp = {}));

//# sourceMappingURL=characterModel.js.map
