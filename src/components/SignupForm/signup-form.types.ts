import { FormValidations } from '@/helpers/form-validation';
import { ComponentProps } from 'react';
import { z } from 'zod';
import { useSignupFormModel } from './signup-form.model';
import { SIGNUP_FORM_SCHEMA } from './signup-form.schema';

export type SignupFormProps = ComponentProps<'form'> &
  ReturnType<typeof useSignupFormModel>;

export type UseSignuptFormModel = {
  action: (
    prevState: SignupFormValidations,
    formData: FormData
  ) => Promise<SignupFormValidations>;
};

export type SignupFormData = z.infer<typeof SIGNUP_FORM_SCHEMA>;

export type SignupFormValidations = FormValidations<
  Pick<z.inferFlattenedErrors<typeof SIGNUP_FORM_SCHEMA>, 'fieldErrors'>
>;
