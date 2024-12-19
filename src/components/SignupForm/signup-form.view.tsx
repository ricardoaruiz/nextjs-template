'use client';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { SignupFormProps } from './signup-form.types';

/**
 * A form for creating a new user.
 *
 * The form has fields for the user's name, email, password, and password
 * confirmation. The form also displays any errors that occur during submission.
 *
 * The form is designed to be used in a client component, and it will be
 * automatically re-rendered when the user submits the form.
 *
 * @param {SignupFormProps} props The props for the form.
 * @returns The form component.
 */
export const SignupForm = (props: SignupFormProps) => {
  const { formState, formAction, formRef, firstFieldRef, ...rest } = props;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 rounded-lg border border-slate-200 p-4 shadow-lg shadow-indigo-200/50"
      {...rest}
    >
      <Text as="h1" size="lg">
        Cadastro de novo usuário
      </Text>

      <div className="flex flex-col gap-2">
        <input
          ref={firstFieldRef}
          type="text"
          name="name"
          placeholder="Nome"
          className="w-full rounded-lg px-4 py-3 ring-1 ring-indigo-200"
        />
        <small className="min-h-5 text-red-500">
          {formState?.fieldErrors?.name && formState.fieldErrors.name[0]}
        </small>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="w-full rounded-lg px-4 py-3 ring-1 ring-indigo-200"
        />
        <small className="min-h-5 text-red-500">
          {formState?.fieldErrors?.email && formState.fieldErrors.email[0]}
        </small>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="w-full rounded-lg px-4 py-3 ring-1 ring-indigo-200"
        />
        <small className="min-h-5 text-red-500">
          {formState?.fieldErrors?.password &&
            formState.fieldErrors.password[0]}
        </small>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmação de senha"
          className="w-full rounded-lg px-4 py-3 ring-1 ring-indigo-200"
        />
        <small className="min-h-5 text-red-500">
          {formState?.fieldErrors?.passwordConfirmation &&
            formState.fieldErrors.passwordConfirmation[0]}
        </small>
      </div>

      <div>
        {formState.message && (
          <Text
            className={cn(
              { 'text-red-500': !formState.ok },
              { 'text-green-500': formState.ok }
            )}
          >
            {formState.message}
          </Text>
        )}
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <SignupSubmitButton />
      </div>
    </form>
  );
};

/**
 * Submit button for the signup form.
 *
 * When the form is submitting, shows a loading animation and the text "Enviando...".
 *
 * Otherwise, shows the text "Cadastrar".
 */
function SignupSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-md border border-indigo-400 bg-indigo-400 px-4 py-2 text-slate-100 transition-all duration-300 hover:bg-indigo-500 active:bg-indigo-600"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader className="animate-spin" />
          Enviando...
        </div>
      ) : (
        'Cadastrar'
      )}
    </button>
  );
}
