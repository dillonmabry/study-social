import * as yup from 'yup';

export const emailNotLongEnough = "Email must be at least 3 characters";
export const passwordNotLongEnough = "Password must be at least 3 characters";
export const invalidEmail = "Email must be a valid email";
export const invalidLogin = "Invalid login";
export const invalidLoginNotLongEnough = "Invalid login, email/password must be at least 3 characters";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

export const validUserSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, emailNotLongEnough)
        .max(255)
        .email(invalidEmail)
        .required(),
    password: registerPasswordValidation
  });

export const loginSchema = yup.object().shape({
  email: yup.string()
    .min(3, invalidLoginNotLongEnough)
    .max(255, invalidLogin)
    .email(invalidLogin)
    .required(),
  password: yup.string()
    .min(3, invalidLoginNotLongEnough)
    .max(255, invalidLogin)
    .required()
});

export const changePasswordSchema = yup.object().shape({
  newPassword: registerPasswordValidation
});
