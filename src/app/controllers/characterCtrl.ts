module characterApp.controllers {
    interface ICharacterListModel {
        title: string;
        characterList: characterApp.models.ICharacterModel[];
    }

    class CharacterListCtrl implements ICharacterListModel {
        title: string;
        characterList: characterApp.models.Character[];

        constructor(private dataAccessService : characterApp.common.DataAccessService) {
            this.title = 'Character List';

            var characterResource = dataAccessService.getCharacterResource();
            characterResource.query((data: characterApp.models.ICharacterModel[]) => {
                this.characterList = data;
            });
        }
    }
    angular.module('characterManagement').controller('CharacterListCtrl', CharacterListCtrl);
}