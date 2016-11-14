/// <reference path="../../../typings/jquery/jquery.d.ts" />

module characterApp.common {
    var mockResource = angular
        .module('characterResourceMock',
            ['ngMockE2E']);

    mockResource.run(mockRun);

    mockRun.$inject = ['$httpBackend'];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var characters: characterApp.models.ICharacterModel[] = [];
        var character: characterApp.models.ICharacterModel;

       character = new characterApp.models.Character('Toni', 'Bennet', 1);
       characters.push(character);
       character = new characterApp.models.Character('Katie', 'Bennet', 2);
       characters.push(character);
       character = new characterApp.models.Character('Kenie', 'Davidson', 3);
       characters.push(character);
       character = new characterApp.models.Character('Sean', 'Kuda', 4);
       characters.push(character);

       var characterUrl = '/api/products';

       $httpBackend['whenGET'](characterUrl).respond(characters);

       var editingRegex = new RegExp(characterUrl + '/[0-9][0-9]*', '');
       $httpBackend['whenGET'](editingRegex).respond(function(method, url, data) {
           var product = { 'productId': 0 };
           var parameters = url.split('/');
           var length = parameters.length;
           var id = +parameters[length - 1];

           if (id > 0) {
               for (var i = 0; i < characters.length; i++) {
                   if (characters[i].characterId === id) {
                       character = characters[i];
                       break;
                   }
               }
           }
           return [200, character, {}];
       });

        // Catch all for testing purposes
        $httpBackend['whenGET'](/api/).respond(function(method, url, data) {
            return [200, character, {}];
        });

        // Pass through any requests for application files
        $httpBackend['whenGET'](/app/).passThrough();
    }
}
