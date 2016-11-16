module characterApp.services {
    import IResult = characterApp.core.IResult;
    import ICharacterModel = characterApp.models.ICharacterModel;

    export interface IDataAccessService {
        getCharacterResource(): ng.IPromise<IResult<ICharacterModel[]>>;
    }

    function DataAccessService($resource: ng.resource.IResourceService): IDataAccessService {
        let characterResource: ng.resource.IResourceClass<IResult<ICharacterModel[]>> =
            $resource<IResult<ICharacterModel[]>>('/Sales%20App/SaleApp/src/app/JSON/TestCharacterData.json');

        return {
            getCharacterResource: (): ng.IPromise<IResult<ICharacterModel[]>> => {
                return characterResource.get().$promise;
            }
        };
    }
    DataAccessService.$inject = ['$resource'];
    angular.module('characterManagement').factory('dataAccessService', DataAccessService);
}