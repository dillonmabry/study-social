/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: forgotPasswordChangeMutation
// ====================================================

export interface forgotPasswordChangeMutation_forgotPasswordChange {
  path: string;
  message: string;
}

export interface forgotPasswordChangeMutation {
  forgotPasswordChange: forgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface forgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}
