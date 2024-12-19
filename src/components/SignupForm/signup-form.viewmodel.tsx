'use client';

import { signupUser } from '@/actions/signup-user';
import { useSignupFormModel } from './signup-form.model';
import { SignupForm } from './signup-form.view';

export const SignupFormViewModel = () => {
  const model = useSignupFormModel({ action: signupUser });

  return <SignupForm {...model} />;
};
