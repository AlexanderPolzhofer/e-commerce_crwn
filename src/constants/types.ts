export enum InputFieldName {
  DISPLAY_NAME = 'displayName',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

export interface InitialValues {
    displayName: string
    email: string
    password: string
    confirmPassword: string
  }