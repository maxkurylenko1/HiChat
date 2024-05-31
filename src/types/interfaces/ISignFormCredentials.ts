export interface ISignFormCredentials {
    username: string;
    password: string;
}

export interface ISignUpFormCredentials extends ISignFormCredentials {
    passwordConfirmation: string;
}
