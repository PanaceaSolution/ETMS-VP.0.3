export interface IAuthData {
    email: string;    
    password: string;
    fullName: string;
    mobileNumber: string;
    confirmPassword?: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface IAuthInitialState {
    authData: IAuthData;        
    status: Status;
}