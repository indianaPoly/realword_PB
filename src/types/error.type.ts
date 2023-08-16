export interface IError {
  errors: {
    [key: string]: string[];
  };
}

export interface ISigninError extends IError {
  signinStatus: boolean;
}
