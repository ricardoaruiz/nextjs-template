import { z } from 'zod';

export const SIGNUP_FORM_SCHEMA = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(6, 'A senha precisa conter pelo menos 6 caracteres'),
    passwordConfirmation: z
      .string()
      .min(1, 'Confirmação de senha é obrigatória')
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas informadas não são iguais',
    path: ['passwordConfirmation']
  });
