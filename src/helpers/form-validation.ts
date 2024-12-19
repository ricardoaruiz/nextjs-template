import { ZodSchema } from 'zod';

/**
 * Validate form data against a given Zod schema, and return the parsed data
 * if validation is successful.
 *
 * If validation fails, throw a FormValidationException with the parsed error
 * messages.
 *
 * @param data The form data to validate.
 * @param schema The Zod schema to validate against.
 * @returns The parsed form data if validation is successful.
 * @throws FormValidationException if validation fails.
 */
export function validateFormFields<TFormData, TFormFieldErrors>(
  data: FormData,
  schema: ZodSchema<TFormData>
) {
  const fields = Object.fromEntries(data);
  const resultParse = schema.safeParse(fields);

  if (!resultParse.success) {
    throw new FormFieldsValidationException<TFormFieldErrors>(
      resultParse.error.flatten().fieldErrors as TFormFieldErrors
    );
  }

  return resultParse.data;
}

export class FormFieldsValidationException<T> extends Error {
  constructor(readonly errors: T) {
    super('Invalid form');
    this.errors = errors;
  }
}

export type FormValidations<TFormFieldErrors> = Partial<TFormFieldErrors> & {
  ok?: boolean;
  message?: string;
};
