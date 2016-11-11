module characterApp.controllers {
    interface ICharacterListModel {
        title: string;
        characterList: characterApp.models.ICharacterModel[];
    }

    class CharacterListCtrl implements ICharacterListModel {
        title: string;
        characterList: characterApp.models.Character[];

        constructor() {
            this.title = 'Character List';
            this.characterList = new Array<characterApp.models.Character>();
            this.characterList.push(new characterApp.models.Character('Toni', 'Bennet'));
            this.characterList.push(new characterApp.models.Character('Katie', 'Bennet'));
        }
    }
    angular.module('characterManagement').controller('CharacterListCtrl', CharacterListCtrl);
}