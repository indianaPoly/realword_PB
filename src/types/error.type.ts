export interface IError {
  errors: {
    [key: string]: string[];
  };
}

export interface ISigninError extends IError {
  signinStatus: boolean;
}

export interface ISignupError extends IError {
  signupStatus: boolean;
}
