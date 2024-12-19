import { useActionState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import {
  SignupFormValidations,
  UseSignuptFormModel
} from './signup-form.types';

const INITIAL_STATE: SignupFormValidations = {};

/**
 * Hook that handles the state of a form for creating a new user.
 *
 * The hook expects an `action` function that will be called with the current
 * form state and the form data when the form is submitted. The `action` function
 * should return a promise that resolves to the new state of the form.
 *
 * The hook returns an object with the following properties:
 * - `formState`: The current state of the form, which is an object with the
 *   following properties:
 *   - `ok`: A boolean indicating whether the form submission was successful.
 *   - `message`: A string with an error message if the form submission failed.
 *   - `fieldErrors`: An object with error messages for each invalid field.
 * - `formAction`: A function to call when the form is submitted.
 * - `formRef`: A reference to the form element.
 * - `firstFieldRef`: A reference to the first form field.
 *
 * When the form is submitted successfully, the hook will reset the form and
 * focus the first field.
 */
export const useSignupFormModel = ({ action }: UseSignuptFormModel) => {
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [formState, formAction] = useActionState(action, INITIAL_STATE);

  useEffect(() => {
    if (formState.ok === undefined) return;

    if (formState.ok) {
      formRef.current?.reset();
      firstFieldRef.current?.focus();
      toast.success('Usuário criado com sucesso!');
    }

    if (!formState.ok) {
      toast.error('Erro ao criar o usuario. Tente novamente');
    }
  }, [formState]);

  return {
    formState,
    formAction,
    formRef,
    firstFieldRef
  };
};
