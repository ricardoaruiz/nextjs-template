'use server';

import { SIGNUP_FORM_SCHEMA } from '@/components/SignupForm/signup-form.schema';
import {
  SignupFormData,
  SignupFormValidations
} from '@/components/SignupForm/signup-form.types';
import {
  FormFieldsValidationException,
  validateFormFields
} from '@/helpers/form-validation';

/**
 * Handles the signup process.
 *
 * The function takes the current form state and the form data and validates the
 * form using the `SIGNUP_FORM_SCHEMA`. If the validation is successful, it
 * pretends to create a new user and returns a success message. If the validation
 * fails, it returns the validation errors. If an unknown error occurs, it
 * returns a generic error message.
 *
 * @param prevState The current state of the form.
 * @param formData The form data.
 * @returns A promise that resolves to the new state of the form.
 */
export const signupUser = async (
  _prevState: SignupFormValidations,
  formData: FormData
): Promise<SignupFormValidations> => {
  try {
    console.log('passando aqui');

    const { name, email, password, passwordConfirmation } = validateFormFields<
      SignupFormData,
      SignupFormValidations
    >(formData, SIGNUP_FORM_SCHEMA);

    // TODO remove this
    console.log('validated data: ', {
      name,
      email,
      password,
      passwordConfirmation
    });

    // TODO remove this
    if (name.toLowerCase() === 'erro') {
      throw new Error('Unknown error');
    }
    // TODO: call api or database
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      ok: true,
      message: 'User created successfully'
    };
  } catch (error: unknown) {
    if (error instanceof FormFieldsValidationException) {
      return {
        fieldErrors: error.errors
      };
    }

    return {
      ok: false,
      message: 'An unexpected error occurred'
    };
  }
};
