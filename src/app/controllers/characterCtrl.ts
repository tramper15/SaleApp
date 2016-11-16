module characterApp.controllers {
    interface ICharacterListModel {
        title: string;
        characterList: characterApp.models.ICharacterModel[];
    }

    class CharacterListCtrl implements ICharacterListModel {
        title: string;
        characterList: characterApp.models.ICharacterModel[];

        constructor(private dataAccessService: characterApp.services.IDataAccessService) {
            this.title = 'Character List';

            let promise = dataAccessService.getCharacterResource();

            promise.then((result: characterApp.core.IResult<characterApp.models.ICharacterModel[]>) => {
                this.characterList = result.data;
            });
        }
    }
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
}