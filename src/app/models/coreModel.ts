module characterApp.core {
    export interface IResult<T> extends ng.resource.IResource<IResult<T>> {
        success: boolean;
        data: T;
        errorMessage: string;
        errorType: string;
    }
}