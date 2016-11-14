module characterApp.models {
    export interface ICharacterModel {
        firstName: string;
        lastName: string;
        characterId: number
        // pictureUrl: string;
        // age: number;
        // ageAppearince: number;
        // race: string;
        // sex: string;
        // gender: string;
        // orientation: string;
        // background: string;
        // physicalDescription: string;
    }

    export class Character implements ICharacterModel {

       constructor(public  firstName: string,
                        public lastName: string,
                        public characterId: number//,
                        // public pictureUrl: string,
                        // public age: number,
                        // public ageAppearince: number,
                        // public race: string,
                        // public sex: string,
                        // public gender: string,
                        // public orientation: string,
                        // public background: string,
                        // public physicalDescription: string
                        ) {}
    }
}