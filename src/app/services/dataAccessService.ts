module characterApp.common {
    interface IDataAccessService {
         getCharacterResource() : ng.resource.IResourceClass<ICharacterResource>;
    }

    interface ICharacterResource extends ng.resource.IResource<characterApp.models.ICharacterModel> {

    }

    export class DataAccessService implements IDataAccessService {
        static $inject = ['$resource'];
        constructor (private $resource: ng.resource.IResourceService) {

        }

        getCharacterResource() : ng.resource.IResourceClass<ICharacterResource> {
            return this.$resource('/api/characters/:productId');
        }
    } 
    angular.module('common.services').service('dataAccessService', DataAccessService);
}